import React from 'react';

import CollectionPreview from '../../components/preview-collection/collection-peview';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>

)

export default ShopPage;