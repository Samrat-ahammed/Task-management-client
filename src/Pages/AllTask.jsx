import SectionTitle from "../Components/SectionTitle";
import HomeCard from "./HomePage/HomeCard";

const AllTask = () => {
  return (
    <div className="space-y-6 p-2">
      <SectionTitle title={"All-Task"}></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
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

export default AllTask;
