import { useContext, useEffect, useState } from "react";
import userDefoultPic from '../../assets/user.png'
import { AuthContext } from "../../provider/AuthProvider";

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
                        <div>
                           
                            {
                                user?<img className=" rounded-full" src={users?.image} alt="" /> : <img className=" rounded-full mr-2" src={userDefoultPic} alt="" />
                            }
                            <div>
                                <h2><span  className="text-xl font-bold">Name:</span> <br /> {users?.name}</h2>
                                <h2 > <span className="text-xl font-bold">email:</span> <br /> {users?.email}</h2>
                            </div>
                        </div>

                    </div>)
                }

            </div>
        </div>
    );
};

export default MyProfile;