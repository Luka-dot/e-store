import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:   
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:    // stacking cases -> if either is sucess  return will trigger
        case UserActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;