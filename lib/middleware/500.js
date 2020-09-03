'use strict';

module.exports = (error, request, response,next) => {
    let output = {
        error:error
    }
    response.status(500).json(output);
}