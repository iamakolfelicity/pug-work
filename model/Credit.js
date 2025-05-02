const mongoose = require('mongoose');

const creditorSchema = new mongoose.Schema({
    Name: {
        type: String,
        trim: true,
       // required: true
    },
    national: {
        type: String,  // Changed to String to preserve leading zeros if needed
        trim: true,
       // required: true
    },
    branch: {
        type: String,
        trim: true,
       // required: true
    },
    type: {
        type: String,
        trim: true,
        //required: true
    },
    dispatchDate: {
        type: Date,
        trim: true,
        default: Date.now  // Automatically sets the current date
    },
    produce: {
        type: String,
        trim: true,
        //required: true
    },
    tonnage: {
        type: String,
        trim: true
    },
    agent: {
        type: String,
        trim: true,
        //required: true
    },
    contact: {
        type: String,  // Changed to String for better handling of phone numbers
        trim: true,
        //required: true
    },
    amount: {
        type: Number,
        trim: true,
        //required: true
    },
    dueDate:{
        type: Date,
        trim: true,
    },
    paymentMode:{
        type: String,  // Changed to String for better handling of phone numbers
        trim: true,
    }
});

module.exports = mongoose.model('creditors', creditorSchema);
