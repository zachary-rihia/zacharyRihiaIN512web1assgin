const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const path = require("path")
const port = 3000

app.set("view engine","ejs")
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname,'assets')))
app.use(expressLayouts)

app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.send('About Page'))
app.get('/user', (req, res) => res.send('User Page'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

