import React from 'react';
import MyButton from '../UI/button/MyButton';

const PostItem = (props) => {
    return (
        <div className='userCard'>
            <div className='userCardInner'>
                <strong>{ props.number}. {props.userCard.name}{props.userCard.surname}</strong>
                <ul>
                    <li>Birthdate: {props.userCard.birthdate}</li>
                    <li>Country: {props.userCard.country}</li>
                    <li>City: {props.userCard.city}</li>
                </ul>
            </div>
            <MyButton  onClick={() => props.remove(props.userCard)}>Delete</MyButton>
        </div>
    );
};

export default PostItem;