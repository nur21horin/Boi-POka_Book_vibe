import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/DashBoard/Dashboard.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
      element:<Home/>
      },{
        path:'books/:bookId',
        element:<BookDetail/>,
        loader:()=>fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-book-vibe/refs/heads/main/public/booksData.json')
      },{
        path:'dashboard',
        element:<Dashboard/>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)

