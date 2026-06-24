import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrenotazioniEventi from "./PrenotazioniEventi";
import "./Index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <PrenotazioniEventi />

  </StrictMode>,
)
