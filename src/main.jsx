import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FeedContextProvider } from './context/FeedContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <FeedContextProvider>
        <App />
      </FeedContextProvider>
  </React.StrictMode>
)
