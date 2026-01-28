import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ✅ Bootstrap CSS (GLOBAL import)
import 'bootstrap/dist/css/bootstrap.min.css'

// Optional: Bootstrap JS (needed for navbar collapse, dropdowns)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
