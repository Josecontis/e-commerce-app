import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';
import './collection-preview.styles.scss';
import {Link} from 'react-router-dom';

/*metodo per gestire la griglia degli item o prodotti*/
const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <div>
            <span className='title'><h1>{title.toUpperCase()}</h1></span>
            <span className='expand'><Link to={`/${title.toLowerCase()}`}>View all...</Link></span>
        </div>
        <div className='preview'>
        {
            items.filter((item, idx) => idx < 4 )
            .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
);

export default CollectionPreview;