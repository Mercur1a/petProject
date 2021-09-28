import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='navBar'>
                <div className='navBarLinks'>
                    <Link to='/home'>Home</Link>
                    <Link to='/usercards'>User cards</Link>
                    <Link to='/restaurant-form'>Customer forms</Link>
                    <Link to='/blog'>Blog posts</Link>
                </div>
            </div>
            <hr/>
        </div>
    )
};

export default Navbar;