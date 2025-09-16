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
 
import recipeDetails from './components/recipeDetails.jsx';
import AllRecipes from './components/AllRecipes.jsx';
import RecipeCard from './components/RecipeCard.jsx';
import TopRecipes from './components/TopRecipes.jsx';


const router = createBrowserRouter([
  {
    path: "",
    Component: MainLayout,
    children: [
      {
        index: true, Component: Home,
        loader: () => fetch('http://localhost:3000/recipes')
      },
      {
        path: '',
        Component: Slider
      },
      {
        path: '',
        Component: TopRecipes
      },
      {
        path: '',
        Component: RecipeCard
      }
    ]
  },
  {
    path: '/allRecipes',
    Component: AllRecipes
  },
  {
    path: '/addRecipes',
    Component: addRecipes
  },
  {
    path: '/recipeDetails/:id',
    loader : ({params})=> fetch(`http://localhost:3000/recipes/${params.id}`),
    Component: recipeDetails
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
