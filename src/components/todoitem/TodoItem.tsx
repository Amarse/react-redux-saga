import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoItem.scss';

const cx = classNames.bind(styles);
export interface TodoItemProps {
    done: boolean;
    onToggle: () => void;
    onRemove: () => void;
}
const TodoItem: React.FC<TodoItemProps> = React.memo(
    ({ children, done, onRemove, onToggle }) => {
        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input
                    className={cx('tick')}
                    type="checkbox"
                    checked={done}
                    readOnly
                />
                <div className={cx('text', { done })}>{children}</div>
                <div
                    className={cx('delete')}
                    onClick={(e: React.SyntheticEvent) => {
                        onRemove();
                        e.stopPropagation(); //이벤트 전파제어
                    }}
                >
                    [지우기]
                </div>
            </div>
        );
    }
);

export default TodoItem;
