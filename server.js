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

app.get('/greeting/:name', (request, response) => {
    response.send(`Hello, ${request.params.name}.`)
})

app.get('/tip/:total/:tipPercentage', (request, response) => {
    
    response.send("Your tip is $" + (request.params.total * (request.params.tipPercentage / 100)))
})

app.get('/magic/:question', (req, res) => {
    const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


    res.send(`${req.params.question}? <h1>${answers[Math.floor(Math.random()*answers.length)]}</h1>`)
})







///////////////////////////////////
// SERVER LISTENER
///////////////////////////////////

app.listen(3000, () => {
    console.log(`listening on ${PORT}`)
})