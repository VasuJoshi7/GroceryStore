const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    ProductId: {
        type: String,
        required: true
    },
    OrderDate: {
        type: Date,
        default: Date.now
    },
    Price: {
        type: Number,
        required: true

    },
    Quantity: {
        required: true,
        type: Number,

    },
    TotalAmount: {
        required: true,
        type: Number,
    },
    createdBy: {
        type: String,
        required: true
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    Phone: { type: Number },
    email: { type: String, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model('Order', orderSchema);