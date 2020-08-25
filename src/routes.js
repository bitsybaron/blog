import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Posts from './Components/Posts';
import Contact from './Components/Contact';
import Interviews from './Components/Interviews'



export default (
    <Switch>
        <Route exact path='/' component={Posts}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/interviews' component={Interviews}/>
    </Switch>
)