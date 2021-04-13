import React from 'react';
import {withRouter} from 'react-router-dom';
import '../menu-item/menu-item.styles.scss';

//qui di seguito le info per costruire il menu alla homepage
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    //al click del bottone unisce il link della home page al link corrispondente del pulsante su cui si clicca
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            {/*immagine di background per le finestre del menu*/}
            <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1> {/*trasforma il titolo di una sezione in maiuscolo */}
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);