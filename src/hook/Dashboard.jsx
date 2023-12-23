import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { PiMegaphoneBold } from "react-icons/pi";
import { FaHome,  } from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import { RiCoupon3Line } from "react-icons/ri";
 
 
 
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Dashboard = () => {

    //TODO: get isAdmin value from the database 
   const {user}= useContext(AuthContext);

    return (
        <div className="flex min-h-screen mx-auto ">
            {/* dashboard side bar  */}
            <div className="w-48 md:w-64 min-h-screen bg-orange-400">
                <div className="p-3">
                    
                </div>
                <ul className="p-4">

                    {
                       user ? <>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/myProfile">
                                    <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full "> <CgProfile size={20} />  My Profile </button>
                                </NavLink>
                            </li>

                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/addedtask">
                                    <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full"> <PiMegaphoneBold size={20} />Added Task</button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/todolist">
                                    <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full "> <VscRequestChanges size={20} />Todo List</button>
                                </NavLink>
                            </li>
                            <li className="mb-3">
                                <NavLink className="text-white " to="/dashboard/deletetask">
                                    <button className="disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full ">  <RiCoupon3Line />
                                    Delete Task </button>
                                </NavLink>
                            </li>

                        </> :  
                         <>
                         null
                         </>
                               
                              
                    }

                    {/* shared Navlink  */}

                    <div className="divider"></div>
                    <li>
                        <NavLink className="text-white " to="/">
                            <button className="  disabled:cursor-not-allowed cursor-pointer hover:bg-black py-3 px-4 text-sm font-semibold rounded-full  transition flex items-center gap-3 w-full ">
                                <FaHome size={20} /> Home </button>
                        </NavLink>

                    </li>

                </ul>
            </div>




            {/* dashboard content  */}
            <div className="grid p-8 ">
                
                    <Outlet></Outlet>
               
            </div>
        </div>
    );
};

export default Dashboard;