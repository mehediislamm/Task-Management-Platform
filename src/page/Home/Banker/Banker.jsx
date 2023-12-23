 
import banker from '../../../assets/Banker2.jpg'
const Banker = () => {
    return (
        <div className='mb-10'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold mb-3'>Expanding the Role of Senior Management</h1>
                <p className='mb-7'>Introduction Employees who are at the highest level of authority in an organization and are responsible for the mater…</p>
            </div>
            <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
                <img src={banker} alt="" />
            </div>
        </div>
    );
};

export default Banker;