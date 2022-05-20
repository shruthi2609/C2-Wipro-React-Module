import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/CounterComponent';
import App from './App';
import TodoComponent from './components/TodoComponent';
const data=[
  {
    fname:"peter",
    email:"peter@gmail.com"
  },
  {
    fname:"peter",
    email:"peter@gmail.com"
  },
  {
    fname:"peter",
    email:"peter@gmail.com"
  }

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<div>
<TodoComponent></TodoComponent>

</div>

);


