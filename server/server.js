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
      url: `localhost:1337/api/${Math.ceil(Math.random() * 100)}`,
      // url: `localhost:1337/` + req.url,
    })
      .then((res) => {
        console.log(res.data);
        res.send(res.data)
        res.send('Hello Proxy GW Server!')
        res.end()
      })
      .catch((err) => { console.log(err); });
  })

// app.get(
//   '/v1/api/:accomodationId/reviews',
//   (req, res) => {
//     axios({
//       method: 'GET',
//       // url: `localhost:1337/api/${Math.ceil(Math.random() * 100)}`,
//       url: `localhost:2020/` + req.url,
//     })
//       .then((res) => {
//         console.log(res.data);
//         res.send(res.data)
//         res.send('Hello Proxy GW Server!')
//         res.end()
//       })
//       .catch((err) => { console.log(err); });
//   })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static(path.join(__dirname, '../air-carousel/client/dist/')));
// app.use(express.static(path.join(__dirname, '../reviews/client/dist/')));
// app.use(express.static(path.join(__dirname, '../public')));
