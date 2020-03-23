//redux type과 액션 정하기

//타입
export const INPUT = 'INPUT';

//액션정의

export interface InputAction {
    type: typeof INPUT;
    payload: { value: string };
}

export const input = (value: string): InputAction => ({
    type: INPUT,
    payload: { value: value }
});
