import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Posts from './Components/Posts';
import Contact from './Components/Contact';



export default (
    <Switch>
        <Route exact path='/' component={Posts}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
)