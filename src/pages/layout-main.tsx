import {  Outlet } from "react-router";
import { MainContent } from "../core-components/main-content";
import { Footer } from "../core-components/footer";
import { Header } from "../core-components/header";

export function LayoutMain() {
  return (
    <>
        <Header/>
        <MainContent>
          <Outlet/>
        </MainContent>
        <Footer/>
    </>
  )
}