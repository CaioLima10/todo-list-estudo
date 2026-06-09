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
  )
}

