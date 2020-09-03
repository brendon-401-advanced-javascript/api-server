'use strict';

const express = require('express');

const app = express();

function products(request,response,next) {
    request.items = {
        id: 1,
        name: "",
        displayName: "",
        category: "",
        description: "",
        price: "",
        inStock: ""
    }
    next();
}

function categories(request,response,next) {
    request.cat = {
        id:1, 
        name: "",
        displayName: "",
        description: ""
    }
    next();
}

function logger(request, response, next) {
    console.log('PATH:',request.path);
    next();
}

app.get('/', logger, products, (request, response) => {
    const pieces = {
    query: request.query,
    params: request.params,
    body: request.body,
    items:request.items,
    cat:request.cat
    }
    response.status(200).json(pieces);
});




//  export function to start server
function start(port) {
    app.listen(port, () => console.log('server running on port', port));
}

module.exports = {
    start: start
}