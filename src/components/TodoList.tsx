import React from 'react';
import { Todo } from '../models/Todo';
import TodoListItem from './TodoListItem';


const TodoList = () => {
    const todos: Todo[] = [
    ];

    return (
        <table className="uk-table">
            <caption>
                Todo List
                    </caption>
            <thead>
                <tr>
                    <th> #</th>
                    <th> Tarefa </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

            {todos?.map((todo: Todo) => {
                    return <TodoListItem key={todo.id} todo={todo} />
                })}
            </tbody>
        </table>

    )



}

export default TodoList;