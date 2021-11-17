const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const path = require("path")
const PORT = process.env.PORT || 3000

app.set("view engine","ejs")
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname,'assets')))
app.use(expressLayouts)

app.get('/', (req, res) => res.render('index'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

