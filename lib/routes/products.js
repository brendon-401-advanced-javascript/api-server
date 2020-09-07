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

async function update(request, response) {
    let id = request.params.id;
    let upRecord = await products.update(id, request.body);
    response.status(201).json(upRecord);
    
}

async function destroy(request, response) {
    let id = request.params.id;
    let delRecord = await products.delete(id);
    response.status(201).send(delRecord);
}

async function getAll(request, response) {
    let all = await products.read(request.body);
    response.status(200).json(all);
}

async function getOne(request, response) {
    let id = request.params.id;
    let one = await products.readOne(id);
    response.status(200).json(one);
}

module.exports = productsRoute;