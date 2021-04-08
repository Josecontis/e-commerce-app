import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';
import './collection-preview.styles.scss';

/*metodo per gestire la griglia degli item o prodotti*/
const allItem = ({title, items}) => (
    <div className='collection-preview'>
        <div>
            <span className='title'><h1>{title.toUpperCase()}</h1></span>
            <span className='expand'><h2><u>View all</u></h2></span>
        </div>
        <div className='preview'>
        {
            items.map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
);

export default allItem;