import { useContext, useEffect, useState } from "react";
import userDefoultPic from '../../assets/user.png'
import { AuthContext } from "../../provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { PiMegaphoneBold } from "react-icons/pi";
import { VscRequestChanges } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";

const MyProfile = () => {
    const [userr, setUser] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://task-management-server-ruby.vercel.app/users`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [])
    return (
        <div>
            <div >
                {
                    userr.map(users => <div key={users._id}>
                        <div className="grid grid-cols-1 md:grid-cols-2" >

                            {
                                user ? <img className=" rounded-full" src={users?.image} alt="" /> : <img className=" rounded-full mr-2" src={userDefoultPic} alt="" />
                            }
                            <div>
                                <h2><span className="text-xl font-bold">Name:</span> <br /> {users?.name}</h2>
                                <h2 > <span className="text-xl font-bold">email:</span> <br /> {users?.email}</h2>
                            </div>
                        </div>

                    </div>)
                }


            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3">
                <li className="mb-3"
                data-aos="zoom-in"
                >
                    <NavLink className="text-white " to="/dashboard/addedtask">
                        <button className="btn btn-primary"> <PiMegaphoneBold size={20} />Added Task</button>
                    </NavLink>
                </li>
                <li className="mb-3"
                data-aos="zoom-in-down"
                >
                    <NavLink className="text-white " to="/dashboard/todolist">
                        <button className="btn btn-primary "> <VscRequestChanges size={20} />Todo List</button>
                    </NavLink>
                </li>
                <li className="mb-3"
                data-aos="zoom-in-up"
                >
                    <NavLink className="text-white " to="/dashboard/deletetask">
                        <button className="btn btn-primary"> <MdDelete size={20} />
                            Delete Task </button>
                    </NavLink>
                </li>
            </div>
        </div>
    );
};

export default MyProfile;