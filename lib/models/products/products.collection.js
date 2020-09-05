'use strict'; 


const schema = require('./products.schema');
class ProdCollection {

    create(newRecord) {
        let record = new schema(newRecord);
        return record.save();
    }

    read(id) {

    }

    update(id, newRecord) {

    }

    delete(id) {

    }

}

module.exports = new ProdCollection();