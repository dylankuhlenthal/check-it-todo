const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  res.locals.userId = null;
  const token = req.cookies.jwt;
  console.log("reqAuth token", token);

  // Check for token in cookies (1)
  if (token) {
    // Verify token (2)
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      // Check for unverified token (2)
      if (err) {
        console.log("reqAuth verify err", err);
        res.status(400).json([]);
      } else {
        // Valid token, continue
        console.log("reqAuth token verified", decodedToken);
        res.locals.userId = decodedToken.id;
        next();
      }
    });
  } else {
    // Handle missing token (1)
    res.status(403).json([]);
  }
};

module.exports = { requireAuth };
