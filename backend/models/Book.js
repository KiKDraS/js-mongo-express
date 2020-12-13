const {Schema, model} = require('mongoose');
const { ModuleFilenameHelpers } = require('webpack');

const BookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genero: {type: String, required: true}, 
    imagePath: {type: String},
    created_at: {type: Date, default: Date.now}
}); 

module.exports = model('Book', BookSchema);