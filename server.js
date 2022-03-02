require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const Log = require('./models/logs')
const app = express()


//View Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//models
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//Middleware
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(req.body)
    next()
})

app.use(methodOverride('_method'))

//INDEX
app.get('/logs', (req, res) => {
    Log.find({}, (err, foundLogs) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('Index', {
                logs: foundLogs
            })
        }
    })
});


//NEW
app.get('/logs/new', (req, res) => {
    res.render('New')
})


//DELETE
app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.redirect('/logs')
        }
    })
});


//UPDATE



//CREATE
app.post('/logs', (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    Log.create(req.body, (err, createdLogs) => {
        if(err){
            res.status(403).send(err)
        } else {
            res.redirect('/logs')
        }
    })
})


//EDIT



//SHOW
app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if(err){
            res.status(400).send(err)
        } else {
            res.render('Show', {
                logs: foundLog
            })
        }
    })
});

app.listen(3000, () => {
    console.log('Wynncraft is Great')
});