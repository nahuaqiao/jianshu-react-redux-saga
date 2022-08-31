import { delay } from 'redux-saga/effects'

function* mySaga() {
  console.log('first log')
  yield delay(500)
}

export default mySaga
