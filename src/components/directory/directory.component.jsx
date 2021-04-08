import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor()
    {
        super();
        this.state = { //section è l'array dei prodotti (JSON)
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                size: 'large',
                id: 1,
                linkUrl: 'hats' 
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                size: 'large',
                id: 2,
                linkUrl: 'jackets' 
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                size: 'large',
                id: 3,
                linkUrl: 'sneakers' 
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'womens' 
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
                size: 'large',
                id: 5,
                linkUrl: 'mens' 
            }]
        }

    }
    render(){
        return(
            <div className='directory-menu'>
            {//scandisce gli elementi in sections e aggiorna lo stato inserendo tanti menu item quanti sono le sections, inserendo i parametri
                this.state.sections.map(section => (
                    <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl}/>
                ))
            }
            </div>
        )
    }
}

export default Directory;