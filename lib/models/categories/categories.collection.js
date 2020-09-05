'use strict'; 


const schema = require('./categories.schema');
class CatCollection {

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

module.exports = new CatCollection();