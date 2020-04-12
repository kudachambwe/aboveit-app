import React from 'react'; 

export const Pagination = ({ 
    itemsPerPage, 
    totalItems, 
    paginate, 
    paginateNext, 
    paginatePrev 
 }) => {

    const getPageNumbers = () => {
        const pageNumbers = []; 
        for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
            pageNumbers.push(i); 
        }
        return pageNumbers; 
    }

    return (
        <nav>
            {/* <button href="!#" type="button" onClick={paginatePrev}> &lt;&lt; Previous</button> */}
            <div style={{display: 'flex'}} className="pagination">
                {getPageNumbers().map(number => (
                    <form key={number} className="page-item"> 
                        <button href="!#" onClick={() => paginate(number)} className="page-item__link">
                            {number}
                        </button>
                    </form>
                ))}
            </div>
            {/* <button href="!#" type="button" onClick={paginateNext}>Next &gt;&gt; </button> */}
        </nav>
    );
};