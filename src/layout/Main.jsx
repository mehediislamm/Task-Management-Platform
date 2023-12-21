import { Outlet } from "react-router-dom";
import Navber from "../page/Shared/Navber/Navber";

 

const Main = () => {
    return (
        <div className=" max-w-[1450px] mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;