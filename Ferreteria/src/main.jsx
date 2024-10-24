import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {SingPage} from './modules/auth/SingPage.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SingPage />
  </StrictMode>,
)
