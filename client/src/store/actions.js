import Repository from '../api/index';
import * as mutations from './mutation-types';

export const fetch = ({ commit }) => {
    return new Promise((resolve, reject) => {
        Repository
            .transactions
            .index()
            .then(({ data: { data } }) => {
                commit(mutations.ADD_TRANSACTIONS, data);
                resolve(data);
            },
            )
            .catch(({ response }) => reject(response))
    })
}
export const addTransaction = ({ commit }, transaction) => commit(mutations.ADD_TRANSACTION, transaction);
export const removeTransaction = ({ commit }, transactionId) => commit(mutations.REMOVE_TRANSACTION, transactionId);
