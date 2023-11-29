import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/HomePage.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Cart from './pages/CartPage.jsx';
import Orders from './pages/OrdersPage.jsx';
import Product from './pages/ProductPage.jsx';
import Settings from './pages/SettingsPage.jsx';
import Wishlists from './pages/Wishlists.jsx';
import SingleWishlist from './pages/WishlistPage.jsx';
import Results from './pages/Results.jsx';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/profile',
        element: <Profile />
      }, {
        path: '/cart',
        element: <Cart />
      }, {
        path: '/orders',
        element: <Orders />
      }, {
        path: '/product/:id',
        element: <Product />
      }, {
        path: '/settings',
        element: <Settings />
      }, {
        path: '/wishlists',
        element: <Wishlists />
      }, {
        path: '/wishlists/:id',
        element: <SingleWishlist />
      }, {
        path: '/results',
        element: <Results />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
