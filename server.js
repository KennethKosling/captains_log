const express = require('express')
const app = express()

//View Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//NEW
app.get('/logs/new', (req, res) => {
    res.render('New')
})

app.listen(3000);