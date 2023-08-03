const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//**UPDATE USER
//? userId, other fields to update
router.put("/:id", async (req, res) => {
  //confirm param id = request id
  if (req.body.userId === req.params.id) {
    //hash password if updated
    if (req.body.password) {
      try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      } catch (err) {
        //password hash error
        res.status(500).json(err);
      }
    }
    try {
      //find user entry
      const user = await User.findByIdAndUpdate(req.body.userId, {
        $set: req.body,
      });
      res.status(200).json("Account updated");
    } catch (err) {
      //update user error
      res.status(500).json(err);
    }
  } else {
    //if param id != req id
    res.status(403).json("Forbidden");
  }
});

//**DELETE USER
//? userId && password
router.delete("/delete", async (req, res) => {
  //catch missing password
  if (!req.body.password) {
    console.log("no pass");
    res.status(400).json("Include password on req");
    return;
  }
  try {
    //Find user
    const user = await User.findById(req.body.userId);
    //Handle no user
    if (!user) {
      console.log("no user");
      res.status(400).json("No user found");
      return;
    }
    //compare passwords
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    //handle invalid password
    if (!validPassword) {
      res.status(403).json("Incorrect Password");
      return;
    }

    //Continue to delete
    const deleteRes = await User.findByIdAndDelete(req.body.userId);
    res.status(200).json("Account successfully deleted");
  } catch (err) {
    //Catch server errors
    console.log(err);
    res.status(500).json(err);
  }
});

//**GET USER
//? id as param
router.get("/:id", async (req, res) => {
  try {
    //find user
    const user = await User.findById(req.params.id);
    //handle no user
    if (!user) {
      res.status(400).json("No user found");
      return;
    }
    //select certain fields - separate out password and rtn otherFields
    const { password, ...otherFields } = user._doc;
    res.status(200).json(otherFields);
  } catch (err) {
    console.log("get user error: ", err);
    res.status(500).json(err);
  }
});
module.exports = router;
