import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
 

const Banner = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='mb-10'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"
                        data-aos="zoom-in"
                        >To be success in life you have to work hard</h1>
                        <p className="mb-5"
                        data-aos="zoom-in"
                        >Embrace these strategies to finally achieve a well-organized work and life balance. Consistency and periodic adjustments will contribute to long-term success.</p>
                        {
                            user ?  <Link to="login"><button className="hidden btn btn-primary">Lets Explore</button></Link>:  <Link to="login"><button className="btn btn-primary">Lets Explore</button></Link>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;