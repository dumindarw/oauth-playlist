const routes = require("express").Router();

routes.get('/login', (req, res) => {
  res.render('login');
})

routes.get('/logout', (req, res) => {
  res.send('logout with passport');
})

routes.get('/google', (req, res) => {
  res.send('google login with passport');
})

module.exports = routes;
