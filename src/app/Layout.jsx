import Header from "../components/Header"
import { Outlet } from "react-router-dom";

export function Layout(){
    return(
        <>
        <Header />
       <div className="justify-center items-center">
        <Outlet />
        </div>
        </>
        
    )

}