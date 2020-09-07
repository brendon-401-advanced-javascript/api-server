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
        return schema.findOne({_id:id});
    }

    update(id, newRecord ) {
        return schema.findOneAndUpdate({_id:id}, {$set:newRecord},{new:true});
    }

    delete(id) {
        return schema.findOneAndDelete({_id:id});
    }

}

module.exports = new ProdCollection();