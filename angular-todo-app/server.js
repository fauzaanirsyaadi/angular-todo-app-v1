function requireHTTPS(req, res, next){
  if(!req.secure && req.get('x-forwarded-proto') !== 'https'){
    return res.redirect('https://'+req.get('host') + req.url);
  }
  next();
}

const express = require('express');
// const path = require('path');
const app = express();

// app.use(requireHTTPS);
app.use(express.static('./dist/angular-todo-app'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/angular-todo-app'}),
);

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Example app listening att http://localhost:${port}`)
})
