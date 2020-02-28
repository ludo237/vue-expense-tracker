'use strict';
import HTTPClient from './client';

export default {
    index: async () => await HTTPClient.get('http://localhost:2370/api/v1/transactions'),
};
