import axios from 'axios';

export function httpGet({ url, params = {} }) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, { params })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

export function httpPost({ url, data = {}, params = {} }) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'post',
            data,
            params,
            transformRequest: [
                function (data) {
                    let ret = '';
                    for (const it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                    }
                    return ret;
                },
            ],
            // , headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

// 请求拦截器
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            if (response.data.code === 511) {
                //
            } else if (response.data.code === 500) {
                //
            } else {
                return Promise.resolve(response);
            }
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            return Promise.reject(error.response);
        }
    },
);
