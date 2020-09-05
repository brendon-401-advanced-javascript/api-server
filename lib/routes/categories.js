'use strict';

const express = require('express');

const categoriesRoute = express.Router();

const categories = require('../models/categories/categories.collection.js')

// routes
categoriesRoute.get('/categories', getAll);
categoriesRoute.get('/categories/:id', getOne);
categoriesRoute.post('/categories', create);
categoriesRoute.put('/categories/:id', update);
categoriesRoute.delete('/categories/:id', destroy);


// CRUD
async function create(request, response) {
    let record = await categories.create(request.body);
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

module.exports = categoriesRoute;
