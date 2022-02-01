const isemail = require('email-format-check');

const isValidUsername = (req, res, next) => {
  const { username } = req.body;
  
  if(!username || username.length < 3)
    return res.status(400).json({ message: 'invalid username' });
  
    next();
  };
  
  const isValidEmail = (req, res, next) => {
    const { email } = req.body
  
    if(!isemail(email))
      return res.status(400).json({ message: 'invalid email' });
  
    next();
  };
  
  const isValidPassword = (req, res, next) => {
    const { password } = req.body;
    const passwordRegex = /^[0-9]*$/;
  
    if(
      password.length < 3
      || password.length > 8
      || !password.match(passwordRegex)
    )
      return res.status(400).json({ message: 'invalid password' });
  
    next();
  };

  const isValidToken = (req, res, next) => {
    const token = req.headers.authorization;
    
    
    if (!token || token.length !== 11)
      return res.status(401).json({ message: 'invalid token' });
    
    next();
  };

  const isValid = (req, res, next) => {
    const { name, initials, country } = req.body;
  
    if(
      !name || name.length < 5 ||
      !initials || initials.length > 3 ||
      !country || country.length < 3
    )
      return res.status(400).json({ message: 'invalid data' });
  
    next();
  };
  
  module.exports = {
    isValidUsername,
    isValidEmail,
    isValidPassword,
    isValidToken,
    isValid
  };