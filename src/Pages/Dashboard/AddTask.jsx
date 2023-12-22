import { useForm } from "react-hook-form";
import useAxiosPublic from "../../CustomHooks/useAxios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

const AddTask = () => {
  const axiosPublic = useAxiosPublic();

  const [addAssignment, setAssignment] = useState({
    email: user?.email,
    title: "",
    mark: "",
    description: "",
    imgUrl: "",
    level: "",
    date: new Date(),
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);

    axiosPublic.post("/service").then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Add Item Success",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="p-6 bg-gradient-to-r from-purple-200 to-blue-200 text-gray-50 rounded-md">
          <p className="bg-purple-500 w-1/4 font-bold text-3xl rounded-t-md p-2">
            Add Your Task
          </p>
          <div action="" className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-b-md rounded-tr-lg shadow-sm bg-gradient-to-r from-purple-500 to-blue-500">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label className="text-sm">Task-Name</label>
                  <input
                    {...register("serviceName", { required: true })}
                    type="text"
                    placeholder="Task Name"
                    className="w-full p-3 rounded-md"
                  />
                  <DatePicker
                    required
                    className="input input-bordered w-full"
                    selected={addAssignment.date}
                    onChange={(date) =>
                      setAssignment({ ...addAssignment, date: date })
                    }
                  />
                </div>

                <div className="col-span-full">
                  <label className="text-sm">Description</label>
                  <textarea
                    {...register("description", { required: true })}
                    placeholder="Description"
                    className="w-full p-3 rounded-md text-black"
                  ></textarea>
                </div>

                <div className="col-span-full sm:col-span-2 space-y-2">
                  <select
                    {...register("area")}
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
            </fieldset>
          </div>
          <button
            type="submit"
            className="bg-purple-500 font-bold text-2xl p-2 flex justify-center items-center mx-auto mt-6 rounded-md"
          >
            Add Service
          </button>
        </section>
      </form>
    </div>
  );
};

export default AddTask;
