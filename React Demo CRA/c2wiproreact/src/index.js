import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/CounterComponent';
import App from './App';
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


 <App studentdata={data}></App>

);


