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

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

// export const emailSignInSuccess = (user) => ({
//     type: UserActionTypes.SIGN_IN_SUCCESS,
//     payload: user
// });

// export const emailSignInFaiure = (error) => ({
//     type: UserActionTypes.SIGN_IN_FAILURE,
//     payload: error
// });
export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});