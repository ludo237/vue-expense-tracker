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
    });
}
export const addTransaction = ({ commit }, transaction) => {
    const { description, amount } = transaction;
    return new Promise((resolve, reject) => {
        Repository
            .transactions
            .store(description, amount)
            .then(({ data: { data } }) => {
                commit(mutations.ADD_TRANSACTION, data);
                resolve(data);
            })
            .catch(({ response }) => reject(response))
    });
};
export const removeTransaction = ({ commit }, transactionId) => {
    return new Promise((resolve, reject) => {
        Repository
            .transactions
            .delete(transactionId)
            .then((data) => {
                commit(mutations.REMOVE_TRANSACTION, transactionId);
                resolve(data);
            })
            .catch(({ response }) => reject(response))
    });
};
