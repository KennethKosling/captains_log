const express = require('express')
const app = express()


//View Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//INDEX



//NEW
app.get('/logs/new', (req, res) => {
    res.render('New')
})


//DELETE



//UPDATE



//CREATE
app.post('/logs', (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    Logs.create(req.body, (err, createdLogs) => {
        if(err){
            res.status(403).send(err)
        } else {
            res.redirect('/logs')
        }
    })
})


//EDIT



//SHOW



app.listen(3000);