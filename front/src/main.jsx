import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { HashRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <BrowserRouter basename="/dviracionys2025/"> */}
     <HashRouter>
    <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </StrictMode>,
)
