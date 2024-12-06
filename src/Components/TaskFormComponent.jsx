import React, { useEffect, useState } from "react";

function TaskFormComponent({ onSub, selectedTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("TO DO");
  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setStatus(selectedTask.status);
    }
  }, [selectedTask]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, status);
    onSub({ title, description, status });
    setDescription("");
    setStatus("TO DO");
    setTitle("");
  };
  return (
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Add New Task
        </button>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 fw-bold mx-auto" id="staticBackdropLabel">Add Task Modal</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
            <div className="bg-slate-400 p-6 w-full max-w-4xl mx-auto mt-5 rounded-lg  shadow-lg">
                <h1 className="text-4xl font-normal w-full text-slate-950  mb-4 text-center    ">
                    {selectedTask ? "Edit Task" : "Add New Task"}
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex  gap-6 justify-center">
                    <div className="flex-1 flex-col w-full ">
                        <div className="flex flex-col w-full  mt-2 text-start items-center justify-center ">
                        <label className="text-white items-start my-1 justify-start text-start  ">
                            Title
                        </label>
                        <div className="flex justify-center items-center w-full">
                            <input
                            type="text"
                            className="p-2 rounded-md border w-3/4  h-8 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            />
                        </div>
                        </div>

                        <div className="flex flex-col w-full items-center my-2 justify-start  ">
                        <label className="text-white my-1 ">Status</label>
                        <div className="flex flex-row w-full items-start justify-center">
                            <select
                            className="p-1 rounded-md border w-3/4 h-8 text-center border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={status}
                            onChange={
                                (e) =>
                                setStatus(
                                    e.target.value === undefined ? status : e.target.value
                                )
                                // setStatus(e.target.value)
                            }
                            required
                            >
                            <option value="To do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="flex-1  w-full flex flex-col justify-center items-center ">
                        <label className="text-white my-2">Description</label>
                        <textarea
                        className="p-2 rounded-md border border-gray-300 w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        />
                    </div>
                    </div>
                    <div className=" text-center mt-5">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-all "
                    >
                        Save
                    </button>
                    </div>
                </form>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default TaskFormComponent;