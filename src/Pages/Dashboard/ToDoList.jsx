import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../CustomHooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../Components/SectionTitle";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const ToDoList = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [myTask, setMyTask] = useState([]);

  const fetchService = () => {
    axiosPublic.get(`/task/${user?.email}`).then((res) => setMyTask(res.data));
  };

  useEffect(() => {
    fetchService();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosPublic.delete(`/task/${id}`);
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            fetchService();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting service:", error);
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle title={"My-To-Do-List"}></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
        {myTask ? (
          myTask?.map((item) => (
            <div key={item._id} className="card bg-[#B3E0FF] text-black">
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="text-pink-950S">{item.description}</p>
                <div className="card-actions flex justify-between items-center text-center">
                  <AiTwotoneDelete
                    onClick={() => handleDelete(item._id)}
                    className="text-2xl text-red-900 badge btn badge-outline"
                  />
                  <button className="btn">Read More..</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-2xl">Please Add Task</h2>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
