const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/manage.js')
const ejs = require('ejs')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// route set here
app.use('/api', userRoutes)

// root route which renders homepage
app.get('/', (req, res) => {
  res.render('home')
})

let port = process.env.PORT
if (port == null || port == '') {
  port = 3000
}

app.listen(port, (req, res) => {
  console.log('server started on port 3000')
})
