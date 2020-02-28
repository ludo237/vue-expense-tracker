import Axios from 'axios';
import NProgress from 'nprogress';

// Force Axios to work with and accept JSON requests
Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Axios.defaults.headers.common['Accept'] = 'application/json';
Axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

// before a request is made start the nprogress
Axios.interceptors.request.use(config => {
    NProgress.start();
    return config;
});

// after a request is made we call this
Axios.interceptors.response.use(
    response => {
        NProgress.done();

        return response;
    },
    error => {
        NProgress.done();

        return Promise.reject(error);
    },
);

export default Axios;
