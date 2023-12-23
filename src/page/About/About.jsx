import { Link } from "react-router-dom";

 

const About = () => {
    return (
        <div>
            <h1 className="mb-5 pt-20 font-bold text-4xl text-center">About Us</h1>
            <p className="mb-5 text-center">At TaskCraft, our dedicated mission is to empower individuals and teams on their journey to goal achievement, prioritizing simplicity and efficiency. We are committed to delivering a seamless and intuitive to-do app designed to elevate productivity and provide unparalleled clarity in managing daily tasks. 
            Through our user-friendly platform, we aim to streamline the path to success, 
            making task management a straightforward and rewarding experience for all.</p>
            <div className="flex justify-center mb-5">
                <Link to="/dashboard"> <button className="btn btn-primary ">View Dashboard</button></Link>
            </div>
           
        </div>
    );
};

export default About;