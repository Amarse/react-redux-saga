//state 정의 및 reducer 작성

import { InputAction } from "./action"

// state 정의

export type InputState = {
  //todo input value
  readonly value: string;
}

//reducer 작성


const inputReducer = (state: InputState = { value: '' },
                                action: InputAction): InputState => {
    switch (action.type) {
        case 'INPUT':
            return { value: action.payload.value };
        default:
            return state;
    }
};  

export default inputReducer;
