import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import LoadingContextProvider from './contexts/LoadingContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </LoadingContextProvider>
  </React.StrictMode>,
)
