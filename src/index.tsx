import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Instructions from './pages/Instructions'
import Keyword from './pages/Keyword'
import Template from './pages/Template'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Instructions />,
  },
  {
    path: '/keyword',
    element: <Keyword />,
  },
  {
    path: '/template',
    element: <Template />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
