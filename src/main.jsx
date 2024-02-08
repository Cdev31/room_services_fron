import React from 'react'
import ReactDOM from 'react-dom/client'
import { RoomApp } from './RoomApp'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={Store}>
      <BrowserRouter>
        <RoomApp />
      </BrowserRouter>
   </Provider>
  </React.StrictMode>,
)
