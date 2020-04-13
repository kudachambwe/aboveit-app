import moment from 'moment';; 

export const parseUnixTimestamp = (timestamp) => {
    return moment.unix(timestamp).format('lll'); 
}; 

export const parseUnixDate = (timestamp) => {
    return moment.unix(timestamp).format('LLL'); 
}; 