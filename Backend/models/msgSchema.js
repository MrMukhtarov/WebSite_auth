const mongoose = require('mongoose')

const mesgSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
    },
    message : {
        type : String,
        required: true,
    },
})

// Create Model
const Message = new mongoose.model('MESSAGE', mesgSchema)

module.exports = Message;