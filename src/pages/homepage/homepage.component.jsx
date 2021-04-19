import React from 'react';
import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';
/*metodo contenitore homepage  */
const HomePage = () => (
    <HomePageContainer>
        <Directory /> {/*oggetto della classe che definisce le schede menu visibili nella homepage  */}
    </HomePageContainer>
);

export default HomePage;