const express = require('express')
const app = express()
const port = 3003
const path = require('path');
const axios = require('axios');

// Air Carousel
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
  
// Reviews
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

// Scheduling
app.get(
  '/api/v1/listings',
  (req, res) => {
    axios({
      method: 'GET',
      url: `http://localhost:3000` + req.url,
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

// Related Homes
app.get(
  '/gethomes',
  (req, res) => {
    axios({
      method: 'GET',
      url: `http://localhost:4321` + req.url,
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
