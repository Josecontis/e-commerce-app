import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';
import { Link } from 'react-router-dom';
import {CollectionPreviewComponent, Preview, Title, Expand} from './collection-preview.styles';
/*metodo per gestire la griglia degli item o prodotti visibili nella schermata SHOP*/
const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewComponent>
    <br/><br/>
        <div>
            <Title><h1>{title.toUpperCase()}</h1></Title>{/*stampa del titolo corrispondente es. HATS.. e riferimento al link corrispondente premendo view all*/}
            <Expand><Link to={`shop/${title.toLowerCase()}`}>View all...</Link></Expand>
        </div>
        <Preview>
            {
                items.filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
        </Preview>
    </CollectionPreviewComponent>
);

export default CollectionPreview;