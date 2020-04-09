import { API_BASE_URL } from '../constants';

const request = async (method, path, data) => {
    return fetch({
        url: API_BASE_URL + "/" + path,
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data
    })
}


export const fetchBitcoinData = async() => {
    const bitcoinData = await request("get")
    return bitcoinData
    // TODO: return.data? 
}