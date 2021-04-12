import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../../components/collection-item/collection-item.component.jsx';

class Collection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: props //inizializza collections con il vettore di prodotti presi dalla specie di JSON file
        }
    }
    render() {
        const { collections } = this.state; //copia in una nuova costante lo stato dell'istanza di classe
        return (
            <div>
                <span className='title'><h1>{collections.props.title.toUpperCase()}</h1></span>

                <div className='collection'>
                    <div></div>
                    <div className='preview'>
                        {
                            //per ogni item identificato dall'id viene creato un oggetto CollectionPreview che è la lista fino a 4 item
                            collections.props.items.map(item =>
                                <CollectionItem key={item.id} item={item} />
                            )
                        }
                    </div>
                </div>
            </div>);
    }
}
export default Collection
