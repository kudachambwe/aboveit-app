import React, { useEffect, useState } from 'react';
import { fetchBitcoinData } from '../../api';
import TableView from '../views/TableView';
import { MAX_ITEMS_PER_PAGE } from '../../constants';
import { Pagination } from '../views/Pagination';
import { LoadingView } from '../views/LoadingView';
import ErrorView from '../views/ErrorView';

 export const BitcoinHistory = () => {

    const [isLoading, setIsLoading] = useState(true); 
    const [hasErrors, setErrors] = useState(false); 
    const [hasWarning, setWarning] = useState(false)
    const [bitcoinData, setBitcoinData] = useState([]);
    const [totalItems, setTotalItems] = useState(0); 
    
    // Pagination Hooks
    const [currentPage, setCurrentPage] = useState(1); 
    const [itemsPerPage] = useState(MAX_ITEMS_PER_PAGE);
    const [maxPage, setMaxPage] = useState(0);  

    useEffect(() => {
        fetchBitcoinData()
            .then((response) => {
                setBitcoinData(response.Data.Data);
                setTotalItems(response.Data.Data.length);
                setMaxPage(Math.ceil(totalItems / itemsPerPage));
                setIsLoading(false); 
                setWarning(response.Data.HasWarning); 
            })
            .catch(error => {
                setErrors(true); 
                console.log(error);
            })

        }, []); 

    const indexOfLast = currentPage * itemsPerPage; 
    const indexOfFirst = indexOfLast - itemsPerPage; 
    const currentData = bitcoinData.slice(indexOfFirst, indexOfLast);

    const paginate = (pageNumber) => {
        console.log('currentData', currentData)
        return setCurrentPage(pageNumber);
    };

    // TODO: Fix this.
    const paginateNext = () => {
        console.log('currentData', currentData)
        const pageNumber =  Math.min(currentPage + 1, maxPage);
        return paginate(pageNumber); 
    }; 

    // TODO: Fix this.
    const paginatePrevious = () => {
        console.log('currentData', currentData)
        const pageNumber = Math.max(currentPage - 1, 1); 
        return paginate(pageNumber); 
    }; 

    if (isLoading) { return <LoadingView/> }; 

    if (hasErrors) { return <ErrorView/>  }; 

    return (
        <section>
            <div>
                {hasWarning ? <p>A warning occured</p> : "" }
                <TableView data={currentData}/>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={totalItems}
                    paginate={paginate}
                    paginateNext={paginateNext}
                    paginatePrev={paginatePrevious}
                />  
            </div>
        </section>
    )
};

export default BitcoinHistory; 