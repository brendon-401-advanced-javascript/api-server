'use strict';

const express = require('express');

const app = express();

function start(port) {
    app.listen(port, () => console.log('server running on port', port));
}

module.exports = {
    start: start
}