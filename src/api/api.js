
import axios from 'axios'; 
import { API_BASE_URL } from '../constants';

const request = async (method, data) => {
    return axios({
        url: API_BASE_URL,
        timeout: 5000, 
        method,
        data
    })
}; 

export const fetchBitcoinData = async () => {
    const bitcoinData = await request("get"); 
    return bitcoinData.data
}