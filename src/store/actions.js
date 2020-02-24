import * as mutations from './mutation-types';
export const addTransaction = ({ commit }, transaction) => commit(mutations.ADD_TRANSACTION, transaction);
export const removeTransaction = ({ commit }, transactionId) => commit(mutations.REMOVE_TRANSACTION, transactionId);
