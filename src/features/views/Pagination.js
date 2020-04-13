import React from 'react'; 
import '../../assets/styles/main.scss'; 

export const Pagination = ({ 
    itemsPerPage, 
    totalItems, 
    paginate, 
    paginateNext, 
    paginatePrev,
    currentPage
 }) => {

    const getPageNumbers = () => {
        const pageNumbers = []; 
        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
            pageNumbers.push(i); 
        }
        return pageNumbers; 
    }

    return (
        <nav className="center large">
            <button className="medium small-mg" href="!#" type="button" onClick={paginatePrev}>
                Prev
            </button>
            <div className="pagination hide-mobile">
                {getPageNumbers().map(number => (
                    <a key={number} 
                        href="!#" 
                        className={(currentPage === number ? 'active' : '')}
                        onClick={() => paginate(number)} >
                        {number}
                    </a>
                ))}
            </div>
            <button className="medium small-mg" href="!#" type="button" onClick={paginateNext}>
                Next
            </button>
        </nav>
    );
};