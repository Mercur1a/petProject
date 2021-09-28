import React, {useState} from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/InputForm/MyInput';
import FormSelect from '../UI/InputForm/FormSelect';


const UserCardPostForm = ({ create }) => {
    const [userData, setUserData] = useState({ name: '', surname: '', birthdate: '', country: '', city: '' })
    
    const addNewCard = (e) => {
    e.preventDefault();
        const newPost = {
        ...userData, id: Date.now()
        }
        create(newPost)
    setUserData({name:'', surname:'', birthdate:'',country:'', city:''})
    }

    return (
         <form className='userCardForms'>
            <div className='personalDataForm'>
                <h3>Personal data</h3>
            <MyInput
                value={userData.name}
                onChange={e => setUserData({...userData, name: e.target.value})}
                type='text'
                placeholder='Name'
        />
            <MyInput
                value={userData.surname}
          onChange={e => setUserData({ ...userData, surname: e.target.value })}
                type='text'
                placeholder='Surname'
            />
            <MyInput
                value={userData.birthdate}
          onChange={e => setUserData({ ...userData, birthdate: e.target.value })}
                type='date'
                placeholder='Birthdate'
            />
            <FormSelect
                value={userData.country}
                defaultValue={'Country'}
            onChange={e => setUserData({ ...userData, country: e.target.value })}
                  options={[
                    { value: 'Latvia', name: 'Latvia' },
                    { value: 'USA', name: 'USA' },
                    { value: 'England', name: 'England' },
                    { value: 'Germany', name: 'Germany' }
                ]}
        />
           <MyInput
                value={userData.city}
          onChange={e => setUserData({ ...userData, city: e.target.value })}
                type='text'
                placeholder='City'
                />
            </div>
            <div >
                <MyButton onClick={addNewCard}>Submit</MyButton>
            </div>
    </form>
    );
};

export default UserCardPostForm;