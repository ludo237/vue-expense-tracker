const router = require('express').Router();
const { getTransactions, addTrasaction, deleteTransaction } = require('../controllers');

router
    .route('/transactions')
    .get(getTransactions)
    .post(addTrasaction);

router
    .route('/transactions/:id')
    .delete(deleteTransaction);

module.exports = router;
