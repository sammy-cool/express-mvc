const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String, 
        required: true 
    }
})

//mongoose middleware
categorySchema.pre('save', function(next){
    //execute logic to be run before saving the record to db
    console.log
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category 