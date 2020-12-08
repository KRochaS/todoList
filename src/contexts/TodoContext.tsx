import React, { createContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';

export const TodoContext =  createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggle: () => {},
});

const TodoProvider = (props: any) => {

    const todos: Todo[] = [
        { id: 1, title: 'Study English', done: false },
        { id: 2, title: 'Listen podcasts', done: true }
    ];

    const addTodo = (title: string) => {};

    const removeTodo = (todo: Todo) => {};

    const toggle = (todo: Todo) => {};

    return(
        <TodoContext.Provider value={
            { 
                todos, addTodo, removeTodo, toggle,
            }
        }>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;