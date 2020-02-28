const uuid = require('uuid');
const Transaction = require('../models/Transaction');

// @description Get all the transactions
// @route GET /api/v1/transactions
exports.getTransactions = async (request, response, next) => {
    try {
        const transactions = await Transaction.find();

        return response
            .status(200)
            .json({
                id: uuid.v4(),
                status: 200,
                message: 'All transactions',
                data: transactions
            });
    } catch (error) {
        return response
            .status(500)
            .json({
                id: uuid.v4(),
                status: 500,
                message: error.codeName,
                errors: [],
            });
    }
}

// @description Add a new transaction
// @route POST /api/v1/transactions
exports.addTrasaction = async (request, response, next) => {
    try {
        // Auto fill using the schema declaration
        const pendingTransaction = await Transaction.create(request.body);

        return response.status(201).json({
            id: uuid.v4(),
            status: 201,
            message: 'Transaction added',
            data: pendingTransaction
        })
    } catch (error) {
        let status = 500;
        let message = error.codeName;
        let errors = [];

        if (error.name === 'ValidationError') {
            status = 422;
            message = error.name;
            // TODO this can be created dynamically in the future :>
            errors = {
                "amount": [error.errors.amount.message],
                "description": [error.errors.description.message]
            };
        }

        return response
            .status(status)
            .json({
                id: uuid.v4(),
                status: status,
                message: message,
                errors: errors,
            });
    }
}

// @description Delete a given transaction
// @route DELETE /api/v1/transactions/:id
exports.deleteTransaction = async (request, response, next) => {
    try {
        const transaction = await Transaction.findById(request.params.id);

        if (!transaction) {
            return response
                .status(404)
                .json({
                    id: '',
                    status: 404,
                    message: 'No transaction',
                    errors: [],
                });
        }

        await transaction.remove();

        return response
            .status(200)
            .json({
                id: uuid.v4(),
                status: 200,
                message: 'Transaction removed',
            });
    } catch (error) {
        return response
            .status(500)
            .json({
                id: uuid.v4(),
                status: 500,
                message: error.codeName,
                errors: [],
            });
    }
}
