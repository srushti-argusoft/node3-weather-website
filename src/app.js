const path = require('path')
const express = require('express')
const { title } = require('process')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup handlebars engine and views location
app.set('view engine', 'hbs') 
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'srushti shah'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About Developer',
        name: 'Sarvangi Shah'    
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        message: ' If you need any help please reach out to us. Feel Free to ask!'
    })
})
app.get('/weather', (req, res) => {
    res.send([{ 
        loction: 'Gandhinagar',
        tempreture: 32
    }])
})
app.listen(3000, () => {
    console.log('Server is up on the port 3000.')
})