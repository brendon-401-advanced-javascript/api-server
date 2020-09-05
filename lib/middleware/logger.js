'use strict'; 

const timeStamp = require('./timeStamp.js');


module.exports = (request,response,next) => {
    console.log(request.method, request.path);
    console.log(timeStamp);
    next();
}