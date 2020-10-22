import UserActionTypes from './user.types';

// export const setCurrentUser = user => ({
//     type: UserActionTypes.SET_CURRENT_USER,
//     payload: user
// });

export const googleSingInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const singInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const emailSingInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

// export const emailSignInSuccess = (user) => ({
//     type: UserActionTypes.SIGN_IN_SUCCESS,
//     payload: user
// });

// export const emailSignInFaiure = (error) => ({
//     type: UserActionTypes.SIGN_IN_FAILURE,
//     payload: error
// });
