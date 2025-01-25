import AllPublishers from "@/components/AllPublisher";
import PlansSection from "@/components/PlansSection";
import Statistic from "@/components/Statistics";
import CarouselSlider from "./Slider";
import { Helmet } from "react-helmet-async";
import NewsletterSignup from "./NewsLatter";
import PollsSection from "./PollsSection";
import LiveAndAnalyticals from "./LiveAndAnalyticals";
import FeedbackSection from "./Feedback";

const Home = () => {
    const stats = {
        totalUsers: 1200,
        normalUsers: 950,
        premiumUsers: 250,
    };
    return (
        <div>
            <Helmet>
                <title>Home ! News 240</title>
            </Helmet>
            <div>
                <CarouselSlider/>
            </div>
            <div>
                <PlansSection/>
            </div>

            <div>
                <Statistic stats={stats}/>
            </div>
           
           <div>
               <LiveAndAnalyticals/>
           </div>
         
           <div>
            <FeedbackSection/>
           </div>

            <div>
                <PollsSection/>
            </div>
            
            <div>
                <AllPublishers/>
            </div>

            <div>
                <NewsletterSignup/>
            </div>
        </div>
    );
};

export default Home;