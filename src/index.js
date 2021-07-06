import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// const link = React.createElement("a", { href: "reactjs.org" }, "Ссылка");
// const jsxlink = <a href="reactjs.org">Ссылка</a>;
// console.log(link);
// console.log(jsxlink);

// ReactDOM.render(link, document.getElementById("root"));
