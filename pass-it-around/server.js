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
    res.send(`99 bottles of beer on the wall, 99 bottles of beeeeer, <a href="http://localhost:3000/98">Take One Down, Pass It Around</a>`)
})

app.get('/:bottlesOfBeer', (req, res) => {
    if (req.params.bottlesOfBeer > 0){
        res.send(` ${req.params.bottlesOfBeer} bottles of beer on the wall! ${req.params.bottlesOfBeer} bottles of beer on the wall, ${req.params.bottlesOfBeer} bottles of beeeeeer, <a href="http://localhost:3000/${req.params.bottlesOfBeer - 1}">Take One Down, Pass It Around</a>`)
    }else {
        res.send(`No more bottles of beer on the wall! <a href="http://localhost:3000/99"> Start Over</a>`)
    }
    
})






app.listen(3000, () => {
    console.log(`listening on ${PORT}`)
})