import React, { useState } from 'react';
import UserCardPostForm from '../components/UserCards/UserCardPostForm';
import Loader from '../components/UI/loader/Loader';
import UserCardList from '../components/UserCards/UserCardList';
import Navbar from '../components/UI/Navbar/Navbar';

const UserCardForm = () => {
    const [userCards, setUsersCard] = useState([
    { id: 1, name: 'Dmitrijs ', surname:'Vasilevskis', birthdate: '17.07.1996', country: 'Latvia', city: 'Riga' },
    { id: 2, name: 'Dmitrijs ', surname:'Vasilevskis', birthdate: '17.07.1996', country: 'Latvia', city: 'Riga' },
    { id: 3, name: 'Dmitrijs ', surname:'Vasilevskis', birthdate: '17.07.1996', country: 'Latvia', city: 'Riga' }
  ])

  const createPost = (newCard) => {
    setUsersCard([...userCards, newCard])
  }

  const removePost = (userCard) => {
    setUsersCard(userCards.filter(p => p.id !== userCard.id))
    console.log(userCard.id)
    
  }

  return (
    
    <div>
      <Navbar/>
      <UserCardPostForm create={createPost} />
      {userCards.length 
        ? <UserCardList title='User Cards' remove={removePost} userCards={userCards} />
        : <Loader />
      }
    </div>
  );
};

export default UserCardForm;