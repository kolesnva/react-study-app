import ReactDOM from "react-dom";
import App from "./App";


const data = {
    id: "id-1",
    url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
    title: "Feathers. Art abstract",
    price: 500,
    author: {
      tag: "ractapopulous",
      url: "https://pixabay.com/users/ractapopulous-24766/"
    },
    "quantity": 10
}







ReactDOM.render(<App/>,
  document.querySelector('#root'));


// ==================================================================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
