import { takeEvery, all } from 'redux-saga/effects';
import { InputAction, INPUT } from './action';

//saga 작성
export default function* inputSaga() {
    yield all([takeEvery(INPUT, input$)]);
}

// 액션 전인가? 후인가? 비동기 처리 해야할 행동이 있으면 정의
// eslint-disable-next-line require-yield
function* input$(action: InputAction) {
    const { type, payload } = action;
    console.log(type);
    console.log(payload);
}
