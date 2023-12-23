 import professional from '../../../assets/corporation.png'

const Professional = () => {
    return (
        <div className='mb-5'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold mb-3'>CORPORATE INVESTMENT PROTECTOR</h1>
                <p className='mb-7'>Financial markets are inherited with volatilities and there is no assurance of returns on investments. Notwithstanding expert qualification and immense experience, it is common to find your well thought investment not giving desired result with even principal getting unrealizable.</p>

            </div>
            <div>
                <img className='w-full' src={professional} alt="" />
            </div>
        </div>
    );
};

export default Professional;