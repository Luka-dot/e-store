import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componenetDidMount() {
        const collectionRef = firestore.collection('collections');
    };
    
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
};

export default ShopPage;