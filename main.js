"use strict";

const port = 3001,
    http = require('http'),
    httpStatus = require('http-status-codes'),
    router = require('./router'),
    contentTypes = require('./content-types'),
    utils = require('./utils');

//Listing 7.8(p.127~128)
//GET Route
router.get("/", (req,res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res)
});
router.get("/courses.html", (req,res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res)
});
router.get("/contact.html", (req,res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res)
});

//POST Route
router.post("/contact.html", (req,res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res)
});

//Asset Route
//CSS Asset Route
router.get("/bootstrap.css", (req,res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res)
});
router.get("/style.css", (req,res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("public/css/style.css", res)
});

//JS Asset Route
//Image Asset Route
router.get("/people.jpg", (req,res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/people.jpg", res)
});
router.get("/product.jpg", (req,res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/product.jpg", res)
});
router.get("/graph.png", (req,res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/graph.png", res)
});



http.createServer(router.handle).listen(port);
console.log(`Server at : http://localhost:${port}`);