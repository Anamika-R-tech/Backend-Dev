const http = require("http");
const fs = require("fs");
const url = require("url");

const Server = http.Server((req,res) => {
    const parsedurl = url.parse(req.url, true);
        const {product,price,discount} = parsedurl.query;
        console.log(product, price, discount);
})