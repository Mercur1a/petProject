import React from 'react';
import UserCardPostItem from './UserCardPostItem'


const PostList = ({userCards, title, remove}) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', padding: 15 }}>{title}</h1>
            <div>
            {userCards.map((userCard, index) =>
                <UserCardPostItem remove={remove} number={index + 1} userCard={userCard} key={userCard.id}
                />)}
            </div>
    </div>
    );
};

export default PostList;