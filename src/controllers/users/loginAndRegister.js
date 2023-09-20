const path = require("path");

const login = (req, res) => {
  res.render(path.join(__dirname, "../../views/users/login.ejs"));
};

const register = (req, res) => {
  res.render(path.join(__dirname, "../../views/users/register.ejs"));
};

module.exports = {
  login,
  register,
};
