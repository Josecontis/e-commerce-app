import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
          
                email: '',
                password: ''
        }
    }

    handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState( {email: '', password: ''} )
		} catch(e) {
			console.log(e);
		}
        this.setState({email: '', password: ''}) //svuota le text area dopo l'accesso
	}

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value}) //setta dinamicamente qualsiasi sia il name a value
    }

    render()
    {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' name="email" type="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput label='Password' name="password" type="password" value={this.state.password} handleChange={this.handleChange} required/>
                    
                    <div className="buttons">
                        <CustomButton type='Submit'> Sign in </CustomButton>
                        <CustomButton type="buttons" onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;