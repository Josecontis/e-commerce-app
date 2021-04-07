import React from 'react';
import {Route} from 'react-router-dom';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <switch>
       <Route exact path='/' component={HomePage}/> {/*exact indica che il path è univico per qll page, path è l'url che in questo caso di HomePage è nullo e component è la pagina*/}
       <Route path='/shop' component={ShopPage}/>
       <Route path='/signin' component={SignInAndSignUpPage}/>
       </switch>
    </div>
  );
}
}

export default App;
