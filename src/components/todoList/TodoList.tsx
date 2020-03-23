import React from 'react';
import TodoItem from '../todoitem';
import { List } from 'immutable';

export interface TodoData {
    id: number;
    text: string;
    done: boolean;
}

export interface TodoListProps {
    todos: List<TodoData>; //작성목록
    onToggle: (id: number) => void; //리스트 숫자
    onRemove: (id: number) => void; //지우기
}

const TodoList: React.FC<TodoListProps> = React.memo(
    ({ todos, onToggle, onRemove }) => {
        const todoList = todos.map(todo => (
            <TodoItem
                key={todo.id}
                done={todo.done}
                onToggle={() => onToggle(todo.id)}
                onRemove={() => onRemove(todo.id)}
            >
                {todo.text}
            </TodoItem>
        ));

        return <div>{todoList}</div>;
    }
);

export default TodoList;
