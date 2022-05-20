const express = require("express");
const router = express.Router();

var path = require('path');
var filePath = "../SOCKET/Cliente/index.html"
var resolvedPath = path.resolve(filePath);


router.get("/", (req, res) => {
    res.sendFile(resolvedPath)
    
    
});


module.exports = router;