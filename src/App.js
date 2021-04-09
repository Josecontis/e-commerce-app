import React from 'react';
import {Switch, Route} from 'react-router-dom';


import './App.css';
import SHOP_DATA from '../src/pages/shop/shop.data.js';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Collection from './pages/categories/collection/collection.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';

import { auth , createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //async per la richiesta API
      if(userAuth) //controlla se l'utente è autenticato
      {
        const userRef = await createUserProfileDocument(userAuth); //prelevo dati dell'utente da inserire nel DB

        //prelevo l'id che non è in snapShot
        userRef.onSnapshot(snapShot => {
            this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      this.setState({currentUser: userAuth}); //istanzio le info dell'utente connesso
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); //log out
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/> {/*lo stato viene passato ad header per aggiornare la voce SIGN IN o SIGN OUT*/}
      <Switch>
        <Route exact path='/' component={HomePage}/> {/*exact indica che il path è univico per qll page, path è l'url che in questo caso di HomePage è nullo e component è la pagina*/}
        <Route path='/shop' component={ShopPage}/> {/*assegna il link della pagina dei prodotti alla voce shoppage*/}
        <Route path='/signin' component={SignInAndSignUpPage}/>{/*assegna il link della pagina di login alla voce SIGN IN o OUT*/}
        <Route path='/hats' render={() => <Collection props={SHOP_DATA[0]}/> } />{/*assegna il link della pagina di login alla voce SIGN IN o OUT*/}
        <Route path='/sneakers' render={() => <Collection props={SHOP_DATA[1]}/> } />{/*assegna il link della pagina di login alla voce SIGN IN o OUT*/}
        <Route path='/jackets' render={() => <Collection props={SHOP_DATA[2]}/> } />{/*assegna il link della pagina di login alla voce SIGN IN o OUT*/}
        <Route path='/womens' render={() => <Collection props={SHOP_DATA[3]}/> } />{/*assegna il link della pagina di login alla voce SIGN IN o OUT*/}
        <Route path='/mens' render={() => <Collection props={SHOP_DATA[4]}/> } />{/*assegna il link della pagina di login alla voce SIGN IN o OUT*/}
      </Switch>
    </div>
  );
}
}

export default App;
