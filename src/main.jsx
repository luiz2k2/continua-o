import { StrictMode } from 'react'
import './index.css'
import Listagem from './Listagem.jsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Listagem />
  </StrictMode>,
)
