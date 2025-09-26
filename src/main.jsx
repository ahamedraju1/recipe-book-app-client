import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import Headers from './components/Headers.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './components/Login.jsx';
import notFound from './components/notFound.jsx';
import Slider from './components/Slider.jsx';
import AllRecipes from './components/AllRecipes.jsx';
import RecipeCard from './components/RecipeCard.jsx';
import TopRecipes from './components/TopRecipes.jsx';
import MyRecipes from './components/MyRecipes.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import AddRecipes from './components/AddRecipes.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import Footer from './Footer/Footer.jsx';
import RecipeBook from './components/RecipeBook.jsx';
import Blogs from './components/Blogs.jsx';


const router = createBrowserRouter([
  {
    path: "",
    Component: MainLayout,
    children: [
      {
        index: true, Component: Home,
        loader: () => fetch('http://localhost:3000/recipes/home')
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
    loader : () => fetch('http://localhost:3000/recipes'),
    Component: AllRecipes
  },
  {
    path: '/myRecipes',
    element: <PrivateRoute> <MyRecipes/> </PrivateRoute>,
    // loader : () => fetch('http://localhost:3000/myRecipes')
  },
  {
    path: '/addRecipes',
    element: <PrivateRoute> <AddRecipes/> </PrivateRoute>
  },
  {
    path: '/recipeDetails/:id',
    loader : ({params})=> fetch(`http://localhost:3000/recipes/${params.id}`),
    element: <PrivateRoute> <RecipeDetails/> </PrivateRoute>
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
    path: '/recipeBook',
    Component: RecipeBook
  },
  {
    path: '/blogs',
    Component: Blogs
  },

  {
    path: '/*',
    Component: notFound
  },

  {
    path: '/footer',
    Component: Footer
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
