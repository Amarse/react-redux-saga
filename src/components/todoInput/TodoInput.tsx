import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoInput.module.scss';

const cx = classNames.bind(styles);

interface Props {
    value: string; //리스트작성
    setInput: (value: string) => {}; //추가버튼
    onInsert: (value: string) => {};
}

const TodoInput: React.FC<Props> = ({ value, setInput, onInsert }) => {
    const handleOnChange = (e: React.SyntheticEvent) => {
        const { value } = e.target as HTMLInputElement;
        setInput(value);
    };

    //엔터치면 저장
    const haldeOnKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onInsert(value);
            setInput('');
        }
    };

    const handleOnClick = () => {
        onInsert(value);
        setInput('');
    };

    return (
        <div className={cx('todo-input')}>
            <input
                value={value}
                onChange={handleOnChange}
                onKeyPress={haldeOnKeyPress}
            />
            <div className={cx('todo-input')} onClick={handleOnClick}>
                추가
            </div>
        </div>
    );
};

export default TodoInput;
