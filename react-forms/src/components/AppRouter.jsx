import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import ListOfForms from '../pages/ListOfForms';
import UserCardForm from '../pages/UserCardForm';
import RestaurantCustomerForm from '../pages/RestaurantCustomerForm';
import BlogPosts from '../pages/BlogPosts';
import Error from '../pages/Error';
import BlogPostById from '../pages/BlogPostById';

const Router = () => {
    return (
        <Switch>
        <Route exact path='/'>
            <ListOfForms/>
          </Route>
        <Route exact path='/home'>
            <ListOfForms/>
          </Route>
        <Route exact path='/restaurant-form'>
            <RestaurantCustomerForm/>
          </Route>
        <Route exact path='/blog'>
            <BlogPosts/>
          </Route>
        <Route path='/blog/:id'>
            <BlogPostById/>
          </Route>
        <Route path='/usercards'>
            <UserCardForm/>
          </Route>
        <Route path='/error'>
           <Error/>
          </Route>
        <Redirect to='/error'/>
      </Switch>
    );
};

export default Router;