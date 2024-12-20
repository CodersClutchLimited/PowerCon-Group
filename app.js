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

app.get('/workforce', (req, res) => {
    res.render('pages/workforce')
})


app.get('/services/water-resources', (req, res) => {
    res.render('pages/water')
})

app.get('/ethos', (req, res) => {
    res.render('pages/quality')
})
app.get('/services/transportation', (req, res) => {
    res.render('pages/transport')
})

app.get('/services/power-eng', (req, res) => {
    res.render('pages/power')
})

app.get('/services/residential-const', (req, res) => {
    res.render('pages/resident')
})

app.get('/services/industrial-const', (req, res) => {
    res.render('pages/industry')
})
app.get('/services/specialized', (req, res) => {
    res.render('pages/specialize')
})







// transportation inner
app.get('/services/transport/inspect', (req, res)=> {
    res.render('inner/transport')
})

app.get('/services/transport/bridge', (req, res)=> {
    res.render('inner/bridge')
})
app.get('/services/transport/smart', (req, res)=> {
    res.render('inner/smart')
})

app.get('/services/transport/asphalt', (req, res)=> {
    res.render('inner/asphalt')
})

app.get('/services/transport/urban', (req, res)=> {
    res.render('inner/urban')
})

app.get('/services/transport/pedesterian', (req, res)=> {
    res.render('inner/pedesterian')
})

app.get('/services/transport/round', (req, res)=> {
    res.render('inner/round')
})

app.get('/services/transport/signalization', (req, res)=> {
    res.render('inner/signalization')
})



// water inner

app.get('/services/water/wastewater', (req, res)=> {
    res.render('inner/water')
})

app.get('/services/water/irrigation', (req, res)=> {
    res.render('inner/irrigation')
})


// POWER INNER
app.get('/services/water/solar', (req, res)=> {
    res.render('inner/solar')
})

app.get('/services/water/bio-energy', (req, res)=> {
    res.render('inner/bio-energy')
})

app.get('/services/water/gas-energy', (req, res)=> {
    res.render('inner/gas-energy')
})

app.get('/services/water/renewable-energy', (req, res)=> {
    res.render('inner/renewable-energy')
})

// RESIDENTIAL INNER
app.get('/services/water/consultancy', (req, res)=> {
    res.render('inner/consultancy')
})

app.get('/services/water/design-build', (req, res)=> {
    res.render('inner/design-build')
})

app.get('/services/water/renovation', (req, res)=> {
    res.render('inner/renovation')
})

app.get('/services/water/green-house', (req, res)=> {
    res.render('inner/green-house')
})

app.get('/services/water/container-housing', (req, res)=> {
    res.render('inner/container-housing')
})

// INDUSTRIAL INNER

app.get('/services/industry/warehouse', (req, res)=> {
    res.render('inner/warehouse')
})

app.get('/services/industry/schools', (req, res)=> {
    res.render('inner/schools')
})

app.get('/services/industry/health-centers', (req, res)=> {
    res.render('inner/health-centers')
})

app.get('/services/industry/shopping-centers', (req, res)=> {
    res.render('inner/shopping-centers')
})

app.get('/services/industry/recreational-centers', (req, res)=> {
    res.render('inner/recreational-centers')
})


app.get('/services/industry/fuel-gas-stations', (req, res)=> {
    res.render('inner/fuel-gas-stations')
})



// SPECIALIZED SERVICE INNER PAGE

app.get('/services/specialized/mining', (req, res)=> {
    res.render('inner/mining')
})

app.get('/services/specialized/industrial-eng', (req, res)=> {
    res.render('inner/industrial-eng')
})

app.get('/services/specialized/residential-electrical', (req, res)=> {
    res.render('inner/residential-electrical')
})

app.get('/services/specialized/procurement', (req, res)=> {
    res.render('inner/procurement')
})





app.listen(1000, () => {
    console.log("LISTENING ON PORT 1000");
})