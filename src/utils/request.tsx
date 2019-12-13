import axios from 'axios';

const HOST: string = 'http://api';

class Http {
    // get请求
    public get(url: string, typedata?: object) {

        return new Promise((res, reject) => {
            axios.get(HOST + url, typedata)

                .then((value: any) => {
                    res(value.data);
                })
                .catch((err: any) => {
                    reject(err);
                })
        })
    }

    // post请求
    public post(url: string, typedata?: object) {

        return new Promise((res, reject) => {
            axios.get(HOST + url, typedata)
                .then((value: any) => {
                    res(value.data);
                })
                .catch((err: any) => {
                    reject(err);
                })
        })
    }

    // 并发请求
    public all([...fun]: Array<Function>) {

        return new Promise((res, reject) => {
            axios.all([...fun])
                .then(value => {
                    res(value);
                })
                .catch((err: any) => {
                    reject(err);
                })
        })
    }
}

export default new Http();