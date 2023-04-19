import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import Hero from ".//components/Hero";
import About from ".//components/About";
import Contact from ".//components/Contact";
import Portfolio from ".//components/Portfolio";
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App> <Hero/> </App>,
  },
  {
    path: "/about",
    element: <App> <About/> </App>,
  },
  {
    path: "/contact",
    element: <App> <Contact/></App>,
  },
  {
    path: "/portfolio",
    element: <App><Portfolio/></App>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
