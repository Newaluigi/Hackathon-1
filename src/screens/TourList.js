import "./TourList.css";
import ActuCard from "../components/ActuCard";
import Counter from "../components/Counter";
import PubBanner from "../components/PubBanner";
import TourCard from "../components/TourCard";
// import MenuButton from '../components/MenuButton';
import Header from "../components/Header";

const TourList = () => {
  return (
    <div className="mainTour">
      <Header />
      <Counter deadline={new Date(2023, 10, 20).getTime() + 3600 * 24 * 1000} />
      <PubBanner />
      <TourCard />
      <hr></hr>
      <ActuCard />
    </div>
  );
};

export default TourList;
