import Hero from '../../Components/HomePageComponents/Hero/Hero';
import OurServices from '../../Components/HomePageComponents/OurServices/OurServices';
import WhoWeAre from '../../Components/HomePageComponents/WhoWeAre/WhoWeAre';
import WinningCollaborators from './../../Components/HomePageComponents/WinningCollaborators/WinningCollaborators';
import ExploreDesign from "./../../Components/HomePageComponents/ExporeDesign/ExploreDesign.jsx"
import ContactUs from '../../Components/HomePageComponents/ContactUs/ContactUs.jsx';


const Home = () => {
    return (
        <div>
            <Hero/>
            <WinningCollaborators/>
            <WhoWeAre/>
            <OurServices/>
            <ExploreDesign/>
            <ContactUs/>
        </div>
    );
};

export default Home;