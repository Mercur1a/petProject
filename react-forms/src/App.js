import React, { useState } from "react";
import './App.css'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import AppRouter from './components/AppRouter'


function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
