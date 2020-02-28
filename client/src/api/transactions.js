'use strict';
import HTTPClient from './client';

export default {
    index: async () => await HTTPClient.get('http://localhost:2370/api/v1/transactions'),

    store: async (description, amount) => await HTTPClient.post('http://localhost:2370/api/v1/transactions', { description, amount }),

    delete: async (transactionId) => await HTTPClient.delete(`http://localhost:2370/api/v1/transactions/${transactionId}`)
};
