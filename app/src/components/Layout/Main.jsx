import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

export default function Main(){
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}