const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./users')
const app  = express();
const port = 3001;

const middleWareTime = (req, res, next) => {
    console.log('====================================');
    console.log("The Time is " + new Date());
    console.log('====================================');
    next()
}
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/users', usersRouter)

app.use(middleWareTime)

// app.use( (req, res, next) => {console.log("hellooooo"); next()})

app.get("/", middleWareTime, (req, res) => {
    console.log(req.query)
    res.send("Hello World")
})

// app.get("/users/:name", (req, res) => {
//     res.send("Got a GET request for...." + req.params.name)
// })

// app.post("/users", (req, res) => {
//     console.log(req.body)
//     res.status(200).send("POST WITH BODY")
// })

app.delete("/", (req, res) => {
    res.send("NOTHING DELETED!")
})

app.listen(port, () => {
    console.log('====================================');
    console.log("App listening on port ", port);
    console.log('====================================');
})
// console.log(express)