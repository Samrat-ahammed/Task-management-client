import { useEffect, useState } from "react";
import SectionTitle from "../Components/SectionTitle";
import HomeCard from "./HomePage/HomeCard";
import useAxiosPublic from "../CustomHooks/useAxios";

const AllTask = () => {
  const axiosPublic = useAxiosPublic();
  const [task, setTask] = useState();
  useEffect(() => {
    axiosPublic.get("/task").then((res) => setTask(res.data));
  }, [axiosPublic]);
  return (
    <div className="space-y-6 p-2">
      <SectionTitle title={"All-Task"}></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
        {task?.map((item) => (
          <div key={item._id} className="card bg-[#B3E0FF] text-black">
            <div className="card-body">
              <h2 className="card-title">{item.title || "No Title"}</h2>
              <h2 className="card-title">{item.date || "No Date"}</h2>
              <p className="text-pink-950S">{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn">Read More..</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
