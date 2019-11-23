const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
sistema: String,
lenguaje: String,
tipo: String,
nombre: String,
status:{
    type:Boolean,
    default: false
} 

});
module.exports = mongoose.model('tasks' , TaskSchema);