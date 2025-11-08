import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router';
import Root from './components/Root/Root.jsx';
import Error from './components/Error/Error.jsx';
import Default from './components/Default/Default.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import GadgetDetails from './components/GadgetDetails/GadgetDetails.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'home',
        element:<Default></Default>
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'home/:gadgetId',
        element:<GadgetDetails></GadgetDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
