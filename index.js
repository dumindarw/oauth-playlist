const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('resources'))

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(3000, () => {
  console.log('App is listning to port 3000');
})
