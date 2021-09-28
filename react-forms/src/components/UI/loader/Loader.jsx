import React from 'react';
import cl from './Loader.module.css'

const Loader = ({title}) => {
    return (
        <div className={cl.loaderItems}>
            <div className={cl.loader}>
        
            </div>
            <p style={{ marginTop:'20px'}}>{title}</p>
        </div>
    );
};

export default Loader;