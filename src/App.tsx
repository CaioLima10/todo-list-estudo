<<<<<<< HEAD
import { PagesComponents } from "./pages/pages-components";

export function App() {
  return (
    <PagesComponents/>
=======
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/home-page";
import { ComponentsPage } from "./pages/components-page";
import { LayoutMain } from "./layout-main";

export function App() {
  return (
     <Routes>
        <Route element={<LayoutMain/>}>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/components"} element={<ComponentsPage/>}/>
        </Route>
    </Routes> 
>>>>>>> e091c2bce80ddc24a097da463c0b11f90e655907
  )
}

