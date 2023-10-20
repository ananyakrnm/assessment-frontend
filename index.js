import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter'; 
import Greeting from './grreting';
import ItemList from './list';
import LoginForm from './login';
ReactDOM.render(
  <React.StrictMode>
    <Counter /> {}
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <Greeting /> {}
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <h1>Item List</h1>
      <ItemList items={items} />
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App /> {}
  </React.StrictMode>,
  document.getElementById('root')
);





