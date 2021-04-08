import React from 'react';
import '../sign-in-and-sign-up/sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// metodo contenitore della pagina di accesso
const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/> {/*oggetto della classe che definisce l'accesso di un utente  */}
        <SignUp/> {/*oggetto della classe che definisce la registrazione di un utente */}
    </div>
);

export default SignInAndSignUpPage;