import React, { useEffect, useState } from 'react';
import { fetchBitcoinData } from '../../api';
import TableView from '../views/TableView';
import { MAX_ITEMS_PER_PAGE } from '../../constants';
import { Pagination } from '../views/Pagination';
import { LoadingView } from '../views/LoadingView';
import ErrorView from '../views/ErrorView';
import '../../assets/styles/main.scss'; 

 export const BitcoinHistory = () => {

    const [isLoading, setIsLoading] = useState(true); 
    const [hasErrors, setErrors] = useState(false); 
    const [hasWarning, setWarning] = useState(false); 
    const [bitcoinData, setBitcoinData] = useState([]);
    const [totalItems, setTotalItems] = useState(0); 
    
    // Pagination Hooks
    const [currentPage, setCurrentPage] = useState(1); 
    const [maxPage, setMaxPage] = useState(0);  
    
    const itemsPerPage = MAX_ITEMS_PER_PAGE;

    useEffect(() => {
        fetchBitcoinData()
            .then((response) => {
                const dataSize = response.Data.Data.length; 
                setBitcoinData(response.Data.Data);
                setTotalItems(dataSize);
                setMaxPage(Math.ceil(dataSize / itemsPerPage));
                setIsLoading(false); 
                setWarning(response.Data.HasWarning); 
            })
            .catch(error => {
                setErrors(true); 
                console.log(error);
            })

        }, [itemsPerPage]); 

    const indexOfLast = currentPage * itemsPerPage; 
    const indexOfFirst = indexOfLast - itemsPerPage; 
    const currentData = bitcoinData.slice(indexOfFirst, indexOfLast);

    const paginate = (pageNumber) => {
        return setCurrentPage(pageNumber);
    };

    const paginateNext = () => {
        const pageNumber =  Math.min(currentPage + 1, maxPage);
        return paginate(pageNumber); 
    }; 

    const paginatePrevious = () => {
        const pageNumber = Math.max(currentPage - 1, 1); 
        return paginate(pageNumber); 
    }; 

    if (isLoading) { return <LoadingView/> }; 

    if (hasErrors) { return <ErrorView/>  }; 

    return (
        <section>
            <div>
                {hasWarning ? <p className="large warning">**A warning occured!</p> : "" }
                <TableView data={currentData}/>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={totalItems}
                    paginate={paginate}
                    paginateNext={paginateNext}
                    paginatePrev={paginatePrevious}
                    currentPage={currentPage}
                />  
            </div>
        </section>
    )
};

export default BitcoinHistory; 