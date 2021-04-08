import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

/*metodo contenitore homepage  */
const HomePage = () => (
    <div className='homepage'>
        <Directory/> {/*oggetto della classe che definisce le schede menu visibili nella homepage  */}
    </div>
);

export default HomePage;