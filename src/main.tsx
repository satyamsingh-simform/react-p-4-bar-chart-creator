import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {AxislabelProvider } from './context/AxisLabelContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AxislabelProvider>
      <App />
    </AxislabelProvider>
  </StrictMode>,
)
