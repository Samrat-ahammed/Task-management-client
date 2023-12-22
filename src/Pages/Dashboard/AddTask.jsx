const AddTask = () => {
  return (
    <div>
      <div>
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
          <h2 className="font-bold text-3xl bg-white p-2 rounded-md">
            Add-Task
          </h2>
          <form action="" className="flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="">
                <div>
                  <div className="flex w-full">
                    <div className="col-span-full sm:col-span-3">
                      <label className="text-sm">Task-Title</label>
                      <input
                        type="text"
                        placeholder="Title"
                        className="w-[700px] p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                      />
                    </div>
                    <select className="select select-bordered w-[700px] max-w-xs">
                      <option disabled selected>
                        Who shot first?
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                  </div>
                </div>

                <div className="w-[700px]">
                  <p className="text-sm">Last name</p>
                  <textarea
                    placeholder="Description"
                    className="textarea textarea-bordered textarea-lg w-full"
                  ></textarea>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddTask;
