const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: { type: String, required: true },
    brand: { type: String, required: true, min: 1 },
    createdBy: {
        type: String,
        required: true,
    },
    img: {
        data: Buffer,
        contentType: String
    },
    isActive: {
        type: Boolean,
        defaulta: true,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Products', productSchema);