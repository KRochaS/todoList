import React from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';

// import { Container } from './styles';

const App = () => {
    return (
        <div className="uk-container">
            <Navbar></Navbar>
            <TodoList></TodoList>
        </div>
    );
}

export default App;