import * as mutations from './mutation-types';
export default {
    [mutations.ADD_TRANSACTION]: (state, transaction) => state.transactions.push(transaction),

    [mutations.REMOVE_TRANSACTION]: (state, transactionId) => {
        let index = state.transactions.findIndex(transaction => transaction.id === transactionId);

        state.transactions.splice(index, 1);
    }
}
