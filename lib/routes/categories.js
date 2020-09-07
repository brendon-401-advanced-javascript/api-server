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

async function update(request, response) {
    let id = request.params.id;
    let upRecord = await categories.update(id, request.body);
    response.status(201).json(upRecord);
}

async function destroy(request, response) {
    let id = request.params.id;
    let delRecord = await categories.delete(id);
    response.status(201).json(delRecord);
}

async function getAll(request, response) {
    let all = await categories.read(request.body);
    response.status(200).json(all);
}

async function getOne(request, response) {
    let id = request.params.id;
    let one = await categories.readOne(id);
    response.status(200).json(one);
}

module.exports = categoriesRoute;
