import React,{useState} from 'react';
import RestaurantCustomerPostForm from '../components/CustomerFroms/RestaurantCustomerPostForm';
import RestaurantCustomerFormList from '../components/CustomerFroms/RestaurantCustomerFormList';
import Navbar from '../components/UI/Navbar/Navbar';
import Loader from '../components/UI/loader/Loader';

const RestaurantCustomerForm = () => {

    const [customersForms, setCustomersForms] = useState([
        { id:'1', name: 'Dmitrijs Vasilevskis', phone: '26006519', email: 'dimkjee@gmail.com', date: '26-08-2021', age: '25', favCuisine: 'French', textWishes: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.', distance: 'By advice', recommend: 'Yes' },
        { id:'2', name: 'Dmitrijs Vasilevskis', phone: '26006519', email: 'dimkjee@gmail.com', date: '26-08-2021', age: '25', favCuisine: 'French', textWishes: 'It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.', distance: 'By advice', recommend: 'Yes' }
    ])

    const createForm = (newForm) => {
        setCustomersForms([...customersForms, newForm])
    }

    const removeForm = (customerForm) => {
        setCustomersForms(customersForms.filter(f => f.id !== customerForm.id))
        console.log(customerForm.id)
    }


    return (
        <div>
            <Navbar/>
            <RestaurantCustomerPostForm create={createForm} />
            {customersForms.length
                ? <RestaurantCustomerFormList title='Customers forms' remove={removeForm} customersForms={customersForms}/>
                : <Loader title='Forms were not found'/>
            }
        </div>
    );
};

export default RestaurantCustomerForm;