const path = require("path");
const router = require("express").Router();

// this is the route to index.html/ should respond with html page 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// this is the route to animals.html/ should respond with html page ** different from 
// using api in route/ api returns json
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'))
});

// same as above, but with zookeepers.html
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'))
});

// * acts as wildcard/ any previously undefined routes will redirect to homepage/ *THIS SHOULD ALWAYS
// COME LAST if using app.get
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;