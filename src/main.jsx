import React from 'react'
import ReactDOM from 'react-dom/client'
import { RoomApp } from './RoomApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoomApp />
    </BrowserRouter>
  </React.StrictMode>,
)
