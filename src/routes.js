import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Posts from './Components/Posts';
import Checkout from './Components/Checkout';
import Interviews from './Components/Interviews'
import Style from './Components/Style'
import Travel from './Components/Travel';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Auth from './Components/Auth';
import About from './Components/About';




export default (
    <Switch>
        <Route exact path='/' component={Posts}/>
        <Route path='/interviews' component={Interviews}/>
        <Route path='/style' component={Style}/>
        <Route path='/travel' component={Travel}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/about' component={About}/>
    </Switch>
)