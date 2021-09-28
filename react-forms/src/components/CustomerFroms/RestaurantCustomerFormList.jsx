import React from 'react';
import RestaurantCustomerFormItem from './RestaurantCustomerFormItem';

const RestaurantCustomerFormList = ({ customersForms, title, remove }) => {
    
    
    return (
        <div>
            <h1>{title}</h1>
            {customersForms.map((customersForm, index) =>
                <RestaurantCustomerFormItem customersForm={customersForm} number={index + 1} remove={remove} key={customersForm.id}
                />)}
        </div>
    );
};

export default RestaurantCustomerFormList;