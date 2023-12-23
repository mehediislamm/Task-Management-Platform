
import MenuDropdown from "./MenuDropdown";
import logo  from '../../../assets/logoT-removebg-preview.png';


const Navber = () => {
    // const { user, logOut } = useContext(AuthContext);

    // const handleSignOut = () => {
    //     logOut()
    //         .then(result => {
    //             console.log(result.user);
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }

    // const navLink = <>
    //     <li><NavLink to={'/'}>Home</NavLink></li>
    //     <li><NavLink to={'/ '}>about</NavLink></li>
    //     {/* {
    //         user ? <li className=" hidden"><NavLink to={'/login'}>Login</NavLink></li> : <li><NavLink to={'/login'}>Login</NavLink></li>
    //     }
    //     {
    //         user ? <li className=" hidden"><NavLink to={'/register'}>Register</NavLink></li> : <li><NavLink to={'/register'}>Register</NavLink></li>
    //     }

    //     {
    //         user ? <li><NavLink to={'/createassignment'}>Create Assignments</NavLink></li> : <li className="hidden"><NavLink to={'/createassignment'}>Create Assignments</NavLink></li>
    //     }
    //     {
    //         user ? <li><NavLink to={'/myassignment'}>My Assignment</NavLink></li> : <li className="hidden"><NavLink to={'/myassignment'}>My Assignment</NavLink></li>
    //     }
    //     {
    //         user ? <li><NavLink to={`/submittedassignment`}> Submitted Assignments</NavLink></li> : <li className="hidden"><NavLink to={'/submittedassignment'}> Submitted Assignments</NavLink></li>
    //     } */}

    // </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
          <div className="navbar-start">
            <a className="btn btn-ghost md:text-xl flex items-center"> <img className="w-14" src={logo} alt="" /> <p>TaskManagement</p> </a>
          </div>
    
          <div className="navbar-end">
            <MenuDropdown></MenuDropdown>
          </div>
        </div>
      );
    };
 

export default Navber;