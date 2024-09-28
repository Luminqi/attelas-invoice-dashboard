import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col items-center">
      <Router />
    </div>
  </StrictMode>,
)
