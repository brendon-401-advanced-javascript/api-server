'use strict';

module.exports = (request,response,next) => {
    let output = {
        error: 'Not Found'
    };
    response.status(404).json(output);
}