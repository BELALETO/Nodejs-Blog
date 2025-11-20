require('dotenv').config({ path: './.env' })
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', 'ejs')

app.use(expressLayouts)

app.get('/test', (req, res) => {
  res.send('Hello World\n')
})

const port = process.env.PORT || 3000

console.log('port :>> ', port)
app.listen(port, (error) => {
  if (error) console.error(error)
  else console.log(`Listening on port ${port}`)
})
