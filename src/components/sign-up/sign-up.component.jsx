import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { auth , createUserProfileDocument, createUserWithEmailAndPassword} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password != confirmPassword)
        {
            alert("password don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        }
        catch(error){
            console.error(error);
        }
        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value}) //setta dinamicamente qualsiasi sia il name a value
    }

    render()
    {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput label='Display Name' name="displayName" type="text" value={displayName} onChange={this.handleChange} required/>
                    <FormInput label='Email' name="email" type="email" value={email} onChange={this.handleChange} required/>
                    <FormInput label='Password' name="password" type="password" value={password} onChange={this.handleChange} required/>
                    <FormInput label='Confirm password' name="confirmPassword" type="password" value={confirmPassword} onChange={this.handleChange} required/>
                  
                    <CustomButton type='Submit'> Sign up </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;