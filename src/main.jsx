import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import addRecipes from './components/addRecipes.jsx';
import Headers from './components/Headers.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './components/Login.jsx';
import notFound from './components/notFound.jsx';
import Slider from './components/Slider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: '/',
        Component: Slider
      },
      {
        path: '/addRecipes',
        Component: addRecipes
      }
    ]
  },
  {
    path: '/register',
    Component: Register
  },
  {
    path: '/login',
    Component: Login
  },

  {
    path: '/*',
    Component: notFound
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
