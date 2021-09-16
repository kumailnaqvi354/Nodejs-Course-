const path = require('path')
const express = require('express');
const hbs = require('hbs')

const app = express()

// Define Paths for express  Config 
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPaths = path.join(__dirname, '../templates/partials')

// Setup Handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPaths)

// setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather ',
        name: 'Kumail'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about ',
        name: 'Kumail'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'this is some help Text',
        title: 'help',
        name: 'kumail ali'
    })
})

// app.com/weather
app.get('/weather', (req, res) => {
    res.send([
        { location: 'Karachi' },
        { forecast: '30C' }
    ])
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'kumail ali',
        errorMessage:'Help article not found'
    })
})


// always comes in the last 
app.get('*', (req, res) => {
    res.render('404',{
        title: '404',
        name: 'kumail ali',
        errorMessage:'Page not found'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000');
})