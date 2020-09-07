'use strict'; 


const schema = require('./categories.schema');
class CatCollection {

    create(newRecord) {
        let record = new schema(newRecord);
        return record.save();
    }

    readOne(id) {
        return schema.findOne({_id:id});
    }
    read() {
        return schema.find({});
    }

    update(id, newRecord) {
        return schema.findOneAndUpdate({_id:id}, {$set:newRecord}, {new:true});
    }

    delete(id) {
        return schema.findOneAndDelete({_id:id});
    }

}

module.exports = new CatCollection();