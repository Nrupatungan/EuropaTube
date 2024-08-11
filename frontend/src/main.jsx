import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { You } from './Pages/You.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Login } from './Pages/Login.jsx'
import { AuthLayout } from './components/AuthLayout.jsx'
import { Signup } from './Pages/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/feed/you',
        element: 
        <AuthLayout authentication>
          <You />
        </AuthLayout>
      },

    ],
  },
  {
    path: '/login',
    element: 
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
  },
  {
    path: '/signup',
    element:
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
