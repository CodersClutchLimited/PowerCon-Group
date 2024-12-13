const express = require('express')
const path = require('path')
const ejs = require('ejs')
const ejsMate = require('ejs-mate')
const app = express()





app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'src')))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})
app.get('/board', (req, res) => {
    res.render('pages/board')
})

app.get('/mission', (req, res) => {
    res.render('pages/mission')
})
app.get('/corporate', (req, res) => {
    res.render('pages/corporate')
})

app.get('/message', (req, res) => {
    res.render('pages/message')
})




app.listen(1000, () => {
    console.log("LISTENING ON PORT 1000");
})