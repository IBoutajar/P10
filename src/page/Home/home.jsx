import '../Home/home.scss'

import Header from "../../component/header/header";
import Hero from "../../component/hero/hero";
import Features from "../../component/features/features";
import Footer from '../../component/footer/footer';


const Home = ({featuresData}) => {
    return (
        <div className="homeWrapper">
            <Header/>
            <Hero />
            <Features featuresData={featuresData}/>
            <Footer />
        </div>
    );
};

export default Home;