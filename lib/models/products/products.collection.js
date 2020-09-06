'use strict'; 


const schema = require('./products.schema');
class ProdCollection {

    create(newRecord) {
        let record = new schema(newRecord);
        return record.save();
    }

    read() {
        return schema.find({});
    }

    readOne(id) {
        return schema.find({id});
    }

    update(id, newRecord) {
        return schema.findByIdAndUpdate({_id:id}, {name:newRecord});
    }

    delete(id) {
        return schema.findOneAndDelete({_id:id});
    }

}

module.exports = new ProdCollection();