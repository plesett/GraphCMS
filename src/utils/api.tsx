import Http from './request';

export function GetHome() {
    return Http.get('/data');
}

export function GetTitle() {
    return Http.get('/title');
}

export function GetInfo() {
    return Http.get('/info');
}

// 并发请求
export function GetAllData([...fun]) {
    return Http.all([...fun])
}