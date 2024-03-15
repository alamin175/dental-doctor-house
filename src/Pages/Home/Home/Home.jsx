import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ExpertDoctor from "../ExpertDoctor/ExpertDoctor";
import OurServices from "../OurServices/OurServices";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Doc House</title>
      </Helmet>
      <Banner></Banner>
      <OurServices></OurServices>
      <Review></Review>
      <ExpertDoctor></ExpertDoctor>
    </div>
  );
};

export default Home;
