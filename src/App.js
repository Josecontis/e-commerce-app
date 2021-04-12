import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import SHOP_DATA from '../src/pages/shop/shop.data.js';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Collection from './pages/categories/collection/collection.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //async per la richiesta API
      if (userAuth) //controlla se l'utente è autenticato
      {
        const userRef = await createUserProfileDocument(userAuth); //prelevo dati dell'utente da inserire nel DB

        //prelevo l'id che non è in snapShot
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth); //istanzio le info dell'utente connesso
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //log out
  }

  render() {
    return (
      <div>
        <Header /> {/*lo stato viene passato ad header per aggiornare la voce SIGN IN o SIGN OUT*/}
        <Switch>
          <Route exact path='/' component={HomePage} /> {/*exact indica che il path è univico per qll page, path è l'url che in questo caso di HomePage è nullo e component è la pagina*/}
          <Route path='/shop' component={ShopPage} /> {/*assegna il link della pagina dei prodotti alla voce shoppage*/}
          {/*se l'utente è loggato manda alla homepage altrimenti ricarica la pagina di signin */}
          <Route exact path='/signin' render={() => this.props.currentUser ? (
            <Redirect to='/' />
          ) : (
            <SignInAndSignUpPage />
          )
          } />
          <Route path='/hats' render={() => <Collection props={SHOP_DATA[0]} />} />{/*assegna il contenuto di shopdata[0] all'inidirizzo hats*/}
          <Route path='/sneakers' render={() => <Collection props={SHOP_DATA[1]} />} />{/*assegna il contenuto di shopdata[1] all'inidirizzo sneakers*/}
          <Route path='/jackets' render={() => <Collection props={SHOP_DATA[2]} />} />{/*assegna il contenuto di shopdata[2] all'inidirizzo jackets*/}
          <Route path='/womens' render={() => <Collection props={SHOP_DATA[3]} />} />{/*assegna il contenuto di shopdata[3] all'inidirizzo womens*/}
          <Route path='/mens' render={() => <Collection props={SHOP_DATA[4]} />} />{/*assegna il contenuto di shopdata[4] all'inidirizzo mens*/}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({ //state è rootreducer
  setCurrentUser: user => dispatch(setCurrentUser(user)) //prende in input un azione da assegnare ad ogni producer
})

export default connect(mapStateToProps, mapDispatchToProps)(App); //null è perchè non c'è bisogno di passare lo stato dal reducer
