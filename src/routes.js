import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Posts from './Components/Posts';
import Contact from './Components/Contact';
import Interviews from './Components/Interviews'
import Style from './Components/Style'
import Travel from './Components/Travel';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Auth from './Components/Auth';



export default (
    <Switch>
        <Route exact path='/' component={Posts}/>
        {/* <Route path='/contact' component={Contact}/> */}
        <Route path='/interviews' component={Interviews}/>
        <Route path='/style' component={Style}/>
        <Route path='/travel' component={Travel}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/cart' component={Cart}/>
    </Switch>
)