import { takeEvery, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    yield console.log(' fetchCollectionsAsync FIRED!!!');

    try {const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
    
    } catch (error) {
        yield put(fetchCollectionsFailure(error));
    };
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
};