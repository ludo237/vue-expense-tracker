const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: [true, 'Please add a description'],
    },
    amount: {
        type: Number,
        required: [true, 'Please add an amount']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema);
