import React,{useState} from 'react';
import MyButton from '../UI/button/MyButton';
import { useHistory } from "react-router-dom";
import Modal from '../UI/Modal/Modal';
import './ModalInner.css'

const RestaurantCustomerFormItem = (props) => {

    const [modal, setModal] = useState(false);
    
    const router = useHistory();

    return (
        <div className='customerFormItem'>
            <div className='customerFormItemInner'>
                {props.number}. <strong> {props.customersForm.name} </strong>
                <ul className='customerFormItemUl'>
                    <li>Email: {props.customersForm.email}</li>
                    <li>Phone: {props.customersForm.phone}</li>
                    <li>Visitor age: {props.customersForm.age }</li>
                    <li>Visiting date: {props.customersForm.date }</li>
                </ul>
            </div>

            <div className='customerFormItemInner customerFormItemInnerParagraph '>
                <p>Selection factor: {props.customersForm.distance} </p>
                <p>Reccommendation status: {props.customersForm.recommend} </p>
                <p>Favorite cuisine: {props.customersForm.favCuisine } </p>
            </div>

            <div className='customerFormBtns customerFormItemInner'>

                <MyButton onClick={() => props.remove(props.customersForm)}>Delete</MyButton>
                <MyButton onClick={() => setModal(true)}>Open</MyButton>
                <Modal visible={modal} setVisible={setModal}>
                <div className='modalInner'>
                    <div>
                            <h3 className='modalTitle'>{props.number}. <strong> {props.customersForm.name} </strong></h3>
                            <hr style={{width:'100%'}}/>
                        <ul className=''>
                            <li>Email: {props.customersForm.email}</li>
                            <li>Phone: {props.customersForm.phone}</li>
                            <li>Visitor age: {props.customersForm.age }</li>
                            <li>Visiting date: {props.customersForm.date }</li>
                        </ul>
                    </div>

                    <div className=''>
                        <p>Selection factor: {props.customersForm.distance} </p>
                        <p>Reccommendation status: {props.customersForm.recommend} </p>
                        <p>Favorite cuisine: {props.customersForm.favCuisine } </p>
                        <p>Wishes: {props.customersForm.textWishes } </p>
                    </div>
                </div>
                </Modal>
            </div>
        </div>
    );
};

export default RestaurantCustomerFormItem;