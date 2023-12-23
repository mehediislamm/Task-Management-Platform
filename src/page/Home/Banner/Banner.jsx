import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='mb-10'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">To be success in life you have to work hard</h1>
                        <p className="mb-5">Embrace these strategies to finally achieve a well-organized work and life balance. Consistency and periodic adjustments will contribute to long-term success.</p>
                        <Link to="login"><button className="btn btn-primary">Lets Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;