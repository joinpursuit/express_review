const express = require('express');
// const bodyParser = require('body-parser');

const router = express.Router();


// router.use(bodyParser.urlencoded({extended: false}))
// router.use(bodyParser.json())


router.get("/:name", (req, res) => {
    res.send("Got a GET request for...." + req.params.name)
})

router.post("/", (req, res) => {
    console.log(req.body)
    res.status(200).send("POST WITH BODY")
})

// console.log('====================================');
// console.log(router);
// console.log('====================================');

module.exports = router; 