import Banker from "../Banker/Banker";
import Banner from "../Banner/Banner";
import Developer from "../Developer/Developer";
import Professional from "../Professional/Professional";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Developer></Developer>
            <Banker></Banker>
            <Professional></Professional>
        </div>
    );
};

export default Home;