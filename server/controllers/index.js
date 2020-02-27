// @description Get all the transactions
// @route GET /api/v1/transactions
exports.getTransactions = (request, response, next) => {
    response.send('Se all transactions');
}

// @description Add a new transaction
// @route POST /api/v1/transactions
exports.addTrasaction = (request, response, next) => {
    response.send('Add transaction');
}

// @description Delete a given transaction
// @route DELETE /api/v1/transactions/:id
exports.deleteTransaction = (request, response, next) => {
    response.send('Delete transaction');
}
