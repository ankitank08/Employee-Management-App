import React from "react";
import backIcon from "../assets/back.svg";

const CreateTask = () => {
  return (
    <div className="mt-3 px-3 py-3 bg-gray-800 w-full">
      <div className="bg-gray-700 w-full rounded-xl p-6 text-white font-semibold">
        <h2 className="text-2xl mb-4">Create Task</h2>

        <div className="grid grid-cols-2 gap-6">
          {/* Left Side: Inputs */}
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="taskTitle" className="block text-lg mb-2">Task Title</label>
              <input
                type="text"
                id="taskTitle"
                placeholder="Enter task title"
                className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
              />
            </div>

            <div>
              <label htmlFor="taskDate" className="block text-lg mb-2">Date</label>
              <input
                type="date"
                id="taskDate"
                className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
              />
            </div>

            <div>
              <label htmlFor="assignTo" className="block text-lg mb-2">Assign To</label>
              <input
                type="text"
                id="assignTo"
                placeholder="Enter employee name"
                className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-lg mb-2">Category</label>
              <input
                type="text"
                id="category"
                placeholder="Enter category"
                className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Right Side: Description */}
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="description" className="block text-lg mb-2">Description</label>
              <textarea
                id="description"
                placeholder="Enter task description"
                className="p-3 rounded bg-gray-800 text-white border border-gray-600 h-36 focus:outline-none w-full resize-none"
              />
            </div>

            <button className="p-3 bg-green-500 text-white rounded hover:bg-green-600 w-full">
              Create Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
