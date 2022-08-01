import { takeLatest, all, call, put } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import { signInSuccess, signInFailed, signUpFailed, signUpSuccess, signOutFailed, signOutSuccess } from './user.action';

import {
    getCurrentUser,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
    signOutUser
} from '../../utilities/firebase/firebase';

export function* getSnapshotFromUserAuth(userAuth, navigate) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));

        if (navigate) {
            yield call(navigate, '/');
        }
    }
    catch (error) {
        yield put(signInFailed(error));
    }
};

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) {
            return;
        }
        yield call(getSnapshotFromUserAuth, userAuth);
    }
    catch (error) {
        yield put(signInFailed(error));
    }
};

export function* signInWithGoogle({ payload: navigate }) {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user, navigate);
    }
    catch (error) {
        yield put(signInFailed(error));
    }
};

export function* signInWithEmail({ payload: { email, password, navigate } }) {
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user, navigate);
    }
    catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signUp({ payload: { email, password, displayName, navigate } }) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
        user.displayName = displayName;
        yield put(signUpSuccess(user));
        yield call(getSnapshotFromUserAuth, user, navigate);
    }
    catch (error) {
        yield put(signUpFailed(error));
    }
};

export function* signOut() {
    try {
        yield call(signOutUser);
        yield put(signOutSuccess());
    }
    catch (error) {
        yield put(signOutFailed(error));
    }
};

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
};

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
};

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
};

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
};

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignOutStart)
    ]);
};