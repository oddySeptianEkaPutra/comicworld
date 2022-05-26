const express = require('express')
const app = express()
const session = require('express-session')
const port = 3000

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.use(session({
  secret: 'rahasiadong',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    sameSite: true }
}))

app.use("/", require("./routes"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})