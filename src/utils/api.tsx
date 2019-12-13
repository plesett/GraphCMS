import Http from './request';

export function GetHeaderInfo() {
    return Http.get('/data');
}


// 并发请求
export function GetAllData([...fun]) {
    return Http.all([...fun])
}