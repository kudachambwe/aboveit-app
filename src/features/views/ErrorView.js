import React from 'react';

export const ErrorView = ({ customMessage }) => {
    return (
        <div>{customMessage ? customMessage : "An error occured..." }</div>
    ); 
}; 

export default ErrorView; 