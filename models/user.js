const mongoose = require('mongoose');

//create a schema. specify the data types. 
const userSchema = new mongoose.schema({
    name: String, 
    email: { type: String, required: true, unique: true}, // validation? -> specify type.
    age: Number, 
    website: String
});