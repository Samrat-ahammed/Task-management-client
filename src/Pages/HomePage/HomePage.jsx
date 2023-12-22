import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosPublic from "../../CustomHooks/useAxios";
import Banner from "./Banner";
import HomeCard from "./HomeCard";
import "aos/dist/aos.css";
import Aos from "aos";

const HomePage = () => {
  Aos.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  const axiosPublic = useAxiosPublic();
  const [task, setTask] = useState();
  useEffect(() => {
    axiosPublic.get("/task").then((res) => setTask(res.data));
  }, [axiosPublic]);
  return (
    <div className="space-y-6">
      <Banner></Banner>
      <SectionTitle title={"Daily To-Do List"}></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
        {task?.map((item) => (
          <HomeCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
