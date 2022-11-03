//////////////////////////////////
// SETUP - DECLARE DEPENDENCIES - CREATE APP OBJECT
//////////////////////////////////

const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 3000

///////////////////////////////////
///// ROUTES
///////////////////////////////////

app.get('/', (req, res) => {
    res.send(`99 bottles of beer on the wall <a href="http://localhost:3000/98">Take One Down, Pass It Around</a>`)
})

app.get('/:bottlesOfBeer', (req, res) => {
    if (req.params.bottlesOfBeer > 0){
        res.send(`there are now ${req.params.bottlesOfBeer} bottles left <a href="http://localhost:3000/${req.params.bottlesOfBeer - 1}">Take One Down, Pass It Around</a>`)
    }else {
        res.send(`There's no beer left <a href="http://localhost:3000/99"> Start Over!</a>`)
    }
    
})






app.listen(3000, () => {
    console.log(`listening on ${PORT}`)
})