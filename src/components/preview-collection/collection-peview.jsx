import React from 'react';

import './collection-peview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ( { title, items } ) => (
    <div className='collection-preview' >
        <h1 className='title' >{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, index) => index < 4)   // only 4 previews item to be displayed
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} ></CollectionItem>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;