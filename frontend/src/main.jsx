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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import DetailedVideo from './Pages/DetailedVideo.jsx'
import { Channel } from './Pages/Channel/Channel.jsx'
import { Videos } from './Pages/Channel/Videos.jsx'
import { Playlists } from './Pages/Channel/Playlists.jsx'
import { Posts } from './Pages/Channel/Posts.jsx'


const queryClient = new QueryClient()

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
      {
        path: '/detailed-video/:id',
        element: <DetailedVideo />
      },
      {
        path: '/channel/:username',
        element: <Channel />,
        children: [
          {
            path: 'videos/:id',
            element: <Videos />
          },
          {
            path: 'playlists/:id',
            element: <Playlists />
          },
          {
            path: 'posts/:id',
            element: <Posts />
          }
        ]
      }
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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
    <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left'/>
    </QueryClientProvider>
  </React.StrictMode>,
)
