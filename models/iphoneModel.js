// import monggoose 
const mongoose = require('mongoose');

// create a  model for iphone
const ipSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            require: true
        },
        color: {
            type: String,
            require: true
        },
        year: {
            type: String,
            require: true
        }
    }
);

let Iphone = mongoose.model('Iphone', ipSchema);

module.exports = { Iphone };
