import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';
import './collection-preview.styles.scss';
import { Link } from 'react-router-dom';

/*metodo per gestire la griglia degli item o prodotti visibili nella schermata SHOP*/
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <div>
            <span className='title'><h1>{title.toUpperCase()}</h1></span>{/*stampa del titolo corrispondente es. HATS.. e riferimento al link corrispondente premendo view all*/}
            <span className='expand'><Link to={`shop/${title.toLowerCase()}`}>View all...</Link></span>
        </div>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
        </div>
    </div>
);

export default CollectionPreview;