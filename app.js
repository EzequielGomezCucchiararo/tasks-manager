const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')



mongoose.Promise = global.Promise

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')
const routerAuth = require('./routes/auth')

const Account = require('./models/Account');

const PORT = 3000
const app = express()

app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

app.set('view engine','pug')
app.use( express.static('public') )

const urlDB = 'mongodb://localhost:27017/test'
mongoose.connect(urlDB)

app.use('/tasks', routerTasks)
app.use('/task', routerTask)
app.use('/', routerAuth)

app.listen(PORT, () =>
  console.log(`💼 Tasks Server running at PORT ${PORT}...`))