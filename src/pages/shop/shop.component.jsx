import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

class ShopPage extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            collections: SHOP_DATA //inizializza collections con il vettore di prodotti presi dalla specie di JSON file
        }
    }
    render(){
        const {collections} = this.state; //copia in una nuova costante lo stato dell'istanza di classe
        return (<div className='shop-page'>
            {
                //per ogni item identificato dall'id viene creato un oggetto CollectionPreview che è la lista fino a 4 item
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key= {id}{ ...otherCollectionProps}/>
                ))
            }

        </div>);
       
    }
}
export default ShopPage;