const express = require('express')
const app = express()
const port = 3003
const path = require('path');
const axios = require('axios');

app.get(
  '/api/:house',
  (req, res) => {
    axios({
      method: 'GET',
      url: `http://localhost:1337` + req.url,
    })
      .then((innerRes) => {
        console.log(innerRes.data);
        res.writeHead(200);
        res.write(JSON.stringify(innerRes.data))
        res.end()
      })
      .catch((err) => {
        console.log(err);
        res.writeHead(500);
        res.end()
      });
  })
  
app.get(
  '/v1/api/:house/reviews',
  (req, res) => {
    axios({
      method: 'GET',
      url: `http://localhost:2020` + req.url,
    })
      .then((innerRes) => {
        console.log(innerRes.data);
        res.writeHead(200);
        res.write(JSON.stringify(innerRes.data))
        res.end()
      })
      .catch((err) => {
        console.log(err);
        res.writeHead(500);
        res.end()
      });
  })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static(path.join(__dirname, '../public')));

// app.use(express.static(path.join(__dirname, '../air-carousel/client/dist/')));
// app.use(express.static(path.join(__dirname, '../reviews/client/dist/')));
