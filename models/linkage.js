var mongoose = require('mongoose');
var Schema = mongoose.Schema;
LinkageSchema = new Schema({
    name : String,
    category : String,
    qunatity : Number
});
module.exports = mongoose.model('Linkage', EmpSchema);