import React from 'react';
import {CustomButtonContainer} from './custom-button.styles';

//qui si controlla che tipo di bottone è per applicare lo sile css corrispondente, children è la label del bottone
const CustomButton = ({children, ...props}) => (
	<CustomButtonContainer {...props} >
			{children}
	</CustomButtonContainer>
);


export default CustomButton;