import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router'
import { PagesComponents } from './pages/pages-components.tsx'
import { PageHome } from './pages/page-home.tsx'
import { LayoutMain } from './pages/layout-main.tsx'
=======
import { BrowserRouter } from 'react-router'
>>>>>>> e091c2bce80ddc24a097da463c0b11f90e655907

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route element={<LayoutMain/>}>
          <Route path="/" element={<PageHome/>}/>
          <Route path="/componentes" element={<PagesComponents/>}/>
        </Route>
      </Routes>
=======
      <App />
>>>>>>> e091c2bce80ddc24a097da463c0b11f90e655907
    </BrowserRouter>
  </StrictMode>,
)
