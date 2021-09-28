import React from 'react';
import classes from './FormSelect.module.css'

const FormSelect = ({ options, value, onChange, defaultValue }) => {
    return (
        <select className={classes.FormSelect}
            onChange={onChange}
            value={value}
        >
            <option disabled >{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default FormSelect;
