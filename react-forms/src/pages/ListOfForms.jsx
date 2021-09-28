import React from 'react';
import Navbar from '../components/UI/Navbar/Navbar'
import { Link } from 'react-router-dom';
import '../App.css';

const ListOfForms = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='ListOfFroms'>
            <h1 className='ListOfFromsTitle'>List of forms</h1>
                    <span className='ListOfFromsLink'><Link to='/usercards'>User cards</Link>- Simple input forms(text,date,select) with basic info which you can add on page and delete </span>
                    <span className='ListOfFromsLink'><Link to='/restaurant-form'>Customer forms</Link>- Different types of input forms adding on page and posible to open for more info with modal window  </span>
                    <span className='ListOfFromsLink'><Link to='/blog'>Blog posts</Link>- 100 posts on 10 pages from jsonplaceholder services with comments for each post, opens in different pages</span>
            </div>
        </div>
    );
};

export default ListOfForms;