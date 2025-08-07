


const db = require('./queries')

const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.use(express.static(path.resolve(__dirname, '../client/build')))





app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.get('/links', (req, res) => {
    res.send("Hello I'm now in");
  });


  app.get('/links', db.getLinks)
  app.get('/links/:id', db.getLinksById)
  app.post('/links', db.createLinks)
  app.put('/links/:id', db.updateLinks)
  app.delete('/links/:id', db.deleteLinks)




  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })