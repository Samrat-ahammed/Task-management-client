import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const [addAssignment, setAssignment] = useState({
    email: user?.email,
    title: "",
    description: "",
    priority: "",
    date: new Date(),
  });

  const handleAddAssignment = (e) => {
    e.preventDefault();
    console.log(addAssignment);
    fetch("http://localhost:5000/task", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Add your Assignment", "", "success");
        // event.target.reset();
      });
  };
  return (
    <div>
      <div>
        <form
          onSubmit={handleAddAssignment}
          className="p-6 bg-gradient-to-r from-purple-200 to-blue-200 text-gray-50 rounded-md"
        >
          <p className="bg-purple-500 w-1/4 font-bold text-3xl rounded-t-md p-2">
            Add Your Task
          </p>
          <div action="" className="container flex flex-col mx-auto space-y-12">
            <div className="grid grid-cols-4 gap-6 p-6 rounded-b-md rounded-tr-lg shadow-sm bg-gradient-to-r from-purple-500 to-blue-500">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="flex gap-4 col-span-full sm:col-span-3 ">
                  <div>
                    <label className="text-sm">Task-Name</label>
                    <input
                      onChange={(e) =>
                        setAssignment({
                          ...addAssignment,
                          title: e?.target.value,
                        })
                      }
                      type="text"
                      placeholder="Task Name"
                      className="w-full p-3 rounded-md text-black"
                    />
                  </div>
                  <div>
                    <label className="text-sm">Task-Name</label>
                    <DatePicker
                      required
                      className="input input-bordered w-full text-black"
                      selected={addAssignment.date}
                      onChange={(date) =>
                        setAssignment({ ...addAssignment, date: date })
                      }
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label className="text-sm">Description</label>
                  <textarea
                    onChange={(e) =>
                      setAssignment({
                        ...addAssignment,
                        description: e?.target.value,
                      })
                    }
                    placeholder="Description"
                    className="w-full p-3 rounded-md text-black"
                  ></textarea>
                </div>

                <div className="col-span-full sm:col-span-2 space-y-2">
                  <select
                    onChange={(e) =>
                      setAssignment({
                        ...addAssignment,
                        priority: e?.target.value,
                      })
                    }
                    className="w-full max-w-xs text-black p-2 rounded-md"
                  >
                    <option disabled selected>
                      Select Your priority?
                    </option>
                    <option value={"Low"}>Low</option>
                    <option value={"Moderate"}>Moderate</option>
                    <option value={"High"}>High</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Add Service"
            className="btn bg-purple-500 font-bold text-2xl p-2 flex justify-center items-center mx-auto mt-6 rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
