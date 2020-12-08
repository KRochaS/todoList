import React from 'react';
import TodoContext from '../contexts/TodoContext';
import Navbar from './Navbar';
import TodoList from './TodoList';

// import { Container } from './styles';

const App = () => {
    return (
        <TodoContext>
            <Navbar></Navbar>
            <TodoList></TodoList>
        </TodoContext>
    );
}

export default App;