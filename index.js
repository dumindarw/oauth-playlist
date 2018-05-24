const express = require('express');
const app = express();
const path = require('path')
const authRoutes = require('./routes/auth-routes')

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'resources')))

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(3000, () => {
  console.log('App is listning to port 3000');
})
