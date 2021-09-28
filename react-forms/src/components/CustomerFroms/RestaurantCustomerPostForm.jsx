import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/InputForm/MyInput';
import FormSelect from '../UI/InputForm/FormSelect';
import './RestaurantCustomerPostForm.css'




const RestaurantCustomerPostForm = ({create}) => {
    const [userData, setUserData] = useState({ name: '', phone: '', email: '', date: '', age: '', favCuisine: '', textWishes:'', distance: '', recommend:'' })
    

    const addNewPost = (e) => {
    e.preventDefault()
        const newPost ={
            ...userData, id: Date.now()
        }
        create(newPost)
        setUserData({name: '', phone: '', email: '', date: '', age: '', favCuisine: '', textWishes:'', distance: '', recommend:''})
    }

     

    return (
        <form>
            <h1> Restaurant Customers Form</h1>
            <div className='form'>
                <div className='flex-col name-box'>
                    <label>
                    Name:
                        <MyInput
                            value={userData.name}
                            type='text'
                            onChange={e => setUserData({ ...userData, name: e.target.value })}
                            placeholder='Name'
                        />
                </label>
                    <label>
                    Phone:
                        <MyInput
                            value={userData.phone}
                            type='tel'
                            onChange={e => setUserData({ ...userData, phone: e.target.value })}
                            placeholder='+371 24658487'
                        />
                </label>
                    <label>
                    Email:
                        <MyInput
                            value={userData.email}
                            type='email'
                            onChange={e => setUserData({ ...userData, email: e.target.value })}
                            placeholder='Email'
                        />
                </label>
                    <label>
                    Date of visit:
                        <MyInput
                            value={userData.date}
                            type='date'
                            onChange={e => setUserData({...userData, date:e.target.value})}
                        />
                </label>
                </div>
                
                <div className='flex-col'>
                    <label>
                    Your age:
                        <MyInput
                            value={userData.age}
                            type='number'
                            min='1'
                            max='100'
                            step='1'
                            onChange={e => setUserData({ ...userData, age: e.target.value })}
                        />
                </label>
                    <label>
                    Favorite cuisine:
                        <FormSelect
                            value={userData.favCuisine}
                            defaultValue={'types of cuisines'}
                            onChange={e => setUserData({ ...userData, favCuisine: e.target.value})}
                            options={[
                                { value:'French' , name: 'French'},
                                { value:'Italian' , name: 'Italian'},
                                { value:'Japanese' , name: 'Japanese'},
                                { value:'Chinese' , name: 'Chinese'},
                                { value:'Spanish' , name: 'Spanish'}
                            ]}
                        />
                    
                </label>
                    <label style={{display: 'flex'}}>
                    <p > Yours rewiev <br/> wishes and advices:</p>
                        <textarea
                            value={userData.textWishes}
                            onChange={e => setUserData({...userData, textWishes: e.target.value})}
                        >
                    
                    </textarea>
                </label>
                </div>

                
            </div>
            <div className='flex-col'>
                    <div className='radio'>
                        <h3>Why you choose our restaurant?</h3>
                        <label>
                            Close to home/work:
                            <MyInput
                            name='choose'
                            value={userData.distance}
                            type='radio'
                            onChange={e => setUserData({ ...userData, distance: 'Close to home/work' })}
                        />
                        </label>
                        <label>
                            Saw in advertising:
                            <MyInput
                            name='choose'
                            value={userData.distance}
                            type='radio'
                            onChange={e => setUserData({ ...userData, distance: 'Saw in advertising' })}
                        />
                        </label>
                        <label>
                            By advice:
                            <MyInput
                            name='choose'
                            value={userData.distance}
                            type='radio'
                            onChange={e => setUserData({ ...userData, distance: 'By advice' })}
                        />
                        </label>
                    </div>
                    <div className='radio'>
                        <h3> Will you recomend our establishment?</h3>
                        <label>
                            Yes:
                            <MyInput
                            name='yesOrNo'
                            value={userData.recommend}
                            type='radio'
                            onChange={e => setUserData({...userData, recommend:'yes'})}
                            />
                        </label>
                        <label>
                            No:
                            <MyInput
                            name='yesOrNo'
                            value={userData.recommend}
                            type='radio'
                            onChange={e => setUserData({...userData, recommend:'no'})}
                        />
                        </label>
                    </div>
                </div>
                        <div className='formBtn'>
                            <MyButton onClick={addNewPost}>
                                Submit
                            </MyButton>
                        </div>
        </form>
    );
};

export default RestaurantCustomerPostForm;