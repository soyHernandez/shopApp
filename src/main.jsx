import React from 'react'
import ReactDOM from 'react-dom/client'
import { Shop } from './Shop'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Shop />
    </React.StrictMode>,
  </BrowserRouter>
)
