const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  getNameMessage,
  SignInError,
  DuplicateKeyError,
} = require("../utilities/errorHandling");

const TOKEN_EXPIRATION_SECS = 30 * 24 * 60 * 60;

function createToken(id) {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: TOKEN_EXPIRATION_SECS,
  });
}

//** REGISTER
//? displayName && email && password
router.post("/register", async (req, res) => {
  const newUser = new User({
    displayName: req.body.displayName,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: TOKEN_EXPIRATION_SECS * 1000,
    });
    res.status(200).json(user);
  } catch (err) {
    // Check for duplicate email key err
    if (
      err.name === "MongoServerError" &&
      err.message.includes("duplicate key")
    ) {
      res.status(400).json(DuplicateKeyError("Email"));
    } else {
      res.status(500).json(getNameMessage(err));
    }
  }
});

//**LOGIN
//? email && password
router.post("/login", async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json(SignInError());
      return;
    }
    //compare password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(400).json(SignInError());
      return;
    }

    //successful login
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: TOKEN_EXPIRATION_SECS * 1000,
    });
    res.status(200).json({ userId: user._id, displayName: user.displayName });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json(getNameMessage(err));
  }
});

//** LOGOUT */
//? none
router.get("/logout", (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 1,
  });
  res.status(200).json("Logged out, redirect to home");
});

//** VERIFY */
router.get("/verify", async (req, res) => {
  const token = req.cookies.jwt;

  // Check for token
  if (token) {
    // Verify token
    jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
      // Handle verify error
      if (err) {
        res.status(200).json({ invalid: true });
        return;
      } else {
        // Valid token
        const userId = decodedToken.id;
        try {
          const user = await User.findById(userId);

          // Handle no user returned
          if (!user) {
            res.status(200).json({ invalid: true });
            return;
          } else {
            // Return user
            res
              .status(200)
              .json({ userId: user._id, displayName: user.displayName });
          }
        } catch (err) {
          console.log("Verify user err: ", err);
          res.status(500).json({ invalid: true });
        }
      }
    });
  } else {
    // No token
    res.status(200).json({ invalid: true });
  }
});

module.exports = router;
