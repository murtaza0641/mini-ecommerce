const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    countInStock: {
        type: Number,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    }
});
const product =mongoose.model('product',productSchema);
module.exports=product;