import SectionTitle from "../../Components/SectionTitle";
import Banner from "./Banner";
import HomeCard from "./HomeCard";

const HomePage = () => {
  return (
    <div className="space-y-6">
      <Banner></Banner>
      <SectionTitle title={"Daily To-Do List"}></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};

export default HomePage;
