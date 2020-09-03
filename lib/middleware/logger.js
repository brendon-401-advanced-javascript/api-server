'use strict'; 

const timeStamp = require('./timeStamp.js');


module.exports = (request,response,next) => {
    console.log(timeStamp,request.method, request.path);
    next();
}