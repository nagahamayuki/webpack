import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/App.js'


global.navigator = { userAgent: 'all' };
//init express
//expressにて簡単にサーバーを立ち上げた。
const app = express()

// add top page routing
app.get('/', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(
      <App />
    )
  )
})

// start listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
