import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { selectCollectionFromPreview } from './redux/shop/shop.selectors';

import './App.css';

class App extends React.Component {

	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser, collectionsArray } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {//async per la richiesta API
			if (userAuth) {//controlla se l'utente è autenticato
				const userRef = await createUserProfileDocument(userAuth);//prelevo dati dell'utente da inserire nel DB

				//prelevo l'id che non è in snapShot
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			} else {
				setCurrentUser(userAuth); //istanzio le info dell'utente connesso
				addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items}))); 
				//richiama il metodo per aggiungere i dati al db passando il titolo e gli item della categoria 
				//dell'array senza l'id che verrà automaticamente inserito da firestore
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();//log out
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />{/*exact indica che il path è univico per qll page, path è l'url che in questo caso di HomePage è nullo e component è la pagina*/}
					<Route path='/shop' component={ShopPage} />{/*assegna il link della pagina dei prodotti all'oggetto shoppage*/}
					<Route exact path='/checkout' component={CheckoutPage} />{/*assegna il link della pagina del carrello all'oggetto CheckoutPage*/}
					{/*se l'utente è loggato manda alla homepage altrimenti ricarica la pagina di signin */}
					<Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser, //aggiorna lo stato dell'utente
	collectionsArray: selectCollectionFromPreview //aggiorna lo stato delle collection ovvero gli items
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)) //prende in input un azione da assegnare ad ogni reducer che aggiornerà lo stato
});

export default connect(mapStateToProps, mapDispatchToProps)(App);