import React from 'react';
import '../../assets/styles/main.scss';

export const ErrorView = ({ customMessage }) => {
    return (
        <div className="full-container flex-center">
            {customMessage ? customMessage : <h1 className="primary-color">An error occured :/</h1> }
        </div>
    ); 
}; 

export default ErrorView; 