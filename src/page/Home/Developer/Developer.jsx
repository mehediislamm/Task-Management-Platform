 import developer from '../../../assets/Developers.jpg'

const Developer = () => {
    return (
        <div className='mb-10'>
             <div className='text-center'>
                <h1 className='text-2xl font-bold mb-3'>Benefits of a web developer portfolio site</h1>
                <p className='mb-7'>It’s one thing to type out a nice resume, but quite another thing to be able to point to a body of work that speaks for itself. Benefits of using a portfolio website include</p>
            </div>
            <div>
                <img className='w-full' src={developer} alt="" />
            </div>
        </div>
    );
};

export default Developer;