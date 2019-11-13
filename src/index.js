import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';

const todoData =  [
    {id: 1, label: 'Drink Coffee', important: false},
    {id: 2, label: 'Make App', important: true}
];

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    )
};

ReactDom.render(<App/>, document.getElementById('root'));
console.log('Hello, World!');
