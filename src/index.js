import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';
import './index.css';

const todoData =  [
    {id: 1, label: 'Drink Coffee', important: false},
    {id: 2, label: 'Make App', important: true}
];

const App = () => {
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    )
};

ReactDom.render(<App/>, document.getElementById('root'));
console.log('Hello, World!');
