import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import routes from '../src/routes';
import './App.css'

function App() {
  
  return(
    <div>
      <Header />
      {routes}
      <Footer />
      
    </div>
  )
}

export default App;