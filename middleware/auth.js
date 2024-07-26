const jwt = require('jsonwebtoken');

// Middleware function to authenticate a JWT token
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  // Check if no token is provided
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify the token
  try {
    // Decode the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user to the request object
    req.user = decoded.user;
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' }); // Invalid token
  }
};
