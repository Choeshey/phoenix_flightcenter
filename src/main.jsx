import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <WhatsAppButton/>
  </StrictMode>,
)
