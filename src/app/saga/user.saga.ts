import { call, put, takeLatest } from 'redux-saga/effects'
import { loginService, registerService } from '../../services/userService'
import { TokenState, updateAccessTokenForRedux, updateRefreshTokenForRedux } from '../slice/tokenSlice'
import { loginForSaga, registerForSaga, updateUserForRedux } from '../slice/userSlice'
import { alertTask } from './article.saga'

function* loginTask({ type, payload: { username, password } }: { type: string; payload: { username: string; password: string } }) {
    try {
        const token: TokenState = yield call(loginService, { username, password })

        yield put(updateUserForRedux({ user: { username } }))

        yield put(updateAccessTokenForRedux({ access: token.access }))
        yield put(updateRefreshTokenForRedux({ refresh: token.refresh }))

        yield alertTask('success', 'Login succeed~')
    } catch (error: any) {
        yield alertTask('error', error.message)
    }
}

function* registerTask({ type, payload: { username, email, password } }: { type: string; payload: { username: string; email: string; password: string } }) {
    try {
        yield call(registerService, { username, email, password })
        yield loginTask({ type: loginForSaga.type, payload: { username, password } })



        yield alertTask('success', 'Register succeed~')
    } catch (error: any) {
        yield alertTask('error', error.message)
    }
}

export default function* rootUserSaga() {
    yield takeLatest(registerForSaga.type, registerTask)
    yield takeLatest(loginForSaga.type, loginTask)
}