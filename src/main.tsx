import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { PagesComponents } from './pages/pages-components.tsx'
import { PageHome } from './pages/page-home.tsx'
import { LayoutMain } from './pages/layout-main.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain/>}>
          <Route path="/" element={<PageHome/>}/>
          <Route path="/componentes" element={<PagesComponents/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
