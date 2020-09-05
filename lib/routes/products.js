'use strict';

const express = require('express');

const productsRoute = express.Router();

const products = require('../models/products/products.collection.js')

// routes
productsRoute.get('/products', getAll);
productsRoute.get('/products/:id', getOne);
productsRoute.post('/products', create);
productsRoute.put('/products/:id', update);
productsRoute.delete('/products/:id', destroy);


// CRUD
async function create(request, response) {
    let record = await products.create(request.body);
    response.status(201).json(record);
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

module.exports = productsRoute;