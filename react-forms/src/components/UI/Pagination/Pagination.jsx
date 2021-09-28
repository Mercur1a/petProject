import React from 'react';

const Pagination = ({changePage, page, memo}) => {
    return (
            <div className='pageContainer'>
                {memo.map(p => 
                    <span
                        className={page === p ? 'page page_curr' : 'page'}
                        onClick={() => changePage(p)}
                    >
                        {p}
                    </span>)}
            </div>
    );
};

export default Pagination;