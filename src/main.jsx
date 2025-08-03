import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './store/CartContext.jsx'
import { UserProgressContextProvider } from './store/UserProgressContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserProgressContextProvider>
      <ShopContextProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ShopContextProvider>
    </UserProgressContextProvider>
  </BrowserRouter>
  ,
)
