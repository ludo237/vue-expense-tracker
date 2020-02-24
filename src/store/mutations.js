import * as mutations from './mutation-types';
import UUIDv4 from 'uuid/v4';

export default {
    [mutations.ADD_TRANSACTION]: (state, { name, amount }) => {
        const newTransaction = {
            id: UUIDv4(),
            name,
            amount: parseFloat(amount),
        }

        state.transactions.push(newTransaction);
    },

    [mutations.REMOVE_TRANSACTION]: (state, transactionId) => {
        let index = state.transactions.findIndex(transaction => transaction.id === transactionId);

        state.transactions.splice(index, 1);
    }
}
