import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PokeProvider } from './contexts/PokeContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokeProvider>
      <App />
    </PokeProvider>
  </React.StrictMode>,
)
