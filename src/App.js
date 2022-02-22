import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import AboutUs from './components/pages/About';
import Testimonial from './components/pages/Testimonial';
import ContactUs from './components/pages/Contactus';
import Login from './components/pages/Login';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/shop" component={ Shop } />
            <Route path="/about" component={ AboutUs } />
            <Route path="/testimonial" component={ Testimonial } />
            <Route path="/contactUs" component={ ContactUs } />
            <Route path="/login" component={ Login } />
          </Switch>
        <Footer/>
      </div>
    </Router>
  )
}


