const path = require('path')
const express = require('express');

const app = express()

// console.log(__dirname);
// console.log(path.join(__dirname,'../public'));
const publicDirectoryPath = path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather ',
        name: 'Kumail'
    })
})

app.get('/about' ,(req, res) => {
    res.render('about',{
        title: 'about ',
        name: 'Kumail'
    })
})

app.get('/help' ,(req, res) => {
    res.render('help',{
        helpText: 'this is some help Text '
    })
})


// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })

// app.com
// app.com/help

// app.get('/help', (req, res) => {
//     res.send([
//         { name: 'Andrew' },
//         { name: 'Sarah' }
//     ])
// })

// app.com/about
// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })


// app.com/weather
app.get('/weather', (req, res) => {
    res.send([
        { location: 'Karachi' },
        { forecast: '30C' }
    ])
})


app.listen(3000, () => {
    console.log('server is up on port 3000');
})