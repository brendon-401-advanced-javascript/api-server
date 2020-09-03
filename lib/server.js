'use strict';

const express = require('express');
const notFound = require('./middleware/404.js'); 
const fiveHundredErr = require('./middleware/500.js');
const logger = require('./middleware/logger.js');
const uuid = require('uuid').v4;

// DB
let db = {};


const app = express();
app.use(express.json());
app.use(logger);
app.use(fiveHundredErr);

// defualt route
app.get('/', (request,response) => {
    response.send('Please select Products or Categories');
})

// PRODUCTS ROUTES

app.get('/products', getAll);
app.get('/products/:id', getOne);
app.post('/products', create);
app.put('/products/:id', update);
app.delete('/products/:id', destroy);

        // CATEGORIES ROUTES

        // CRUD

function create(request, response) {
    let id = uuid();
    let record = {
        _id: id,
        name: request.body.name,
        displayName: request.body.displayName,
        category: request.body.category,
        description: request.body.description,
        price: request.body.price,
        inStock: request.body.inStock,
    }
    response.status(200).send('Create Not Done');
    db[id] = record;
}

function update(request, response) {
    response.status(201).send('Update Not Done');
}

function destroy(request, response) {
    let id = request.params.id;
    response.status(200).json(db[id]);
}

function getAll(request, response) {
    response.status(200).json(db);
}

function getOne(request, response) {
    let id = request.params.id;
    response.status(200).json(db[id]);
}

app.use('*', notFound);








//  export function to start server
function start(port) {
    app.listen(port, () => console.log('server running on port', port));
}

module.exports = {
    start: start
}