'use strict';

const express = require('express');
const app = express();

// middleware

const notFound = require('./middleware/404.js'); 
const fiveHundredErr = require('./middleware/500.js');
const logger = require('./middleware/logger.js');
// routes
const productsRouter = require('./routes/products.js');
const categoriesRouter = require('./routes/categories.js');

// use the routes and middleware
app.use(express.json());
app.use(logger);
app.use(fiveHundredErr);
app.use(productsRouter);
app.use(categoriesRouter);
app.use('*', notFound);

// defualt route
app.get('/', (request,response) => {
    response.send('Please select Products or Categories');
})




//  export function to start server
function start(port) {
    app.listen(port, () => console.log('server running on port', port));
}

module.exports = {
    start: start
}