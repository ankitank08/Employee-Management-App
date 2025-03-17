import React from "react";

const TaskList = () => {
  const tasks = [
    { priority: "High", bgColor: "bg-yellow-500", title: "New Task", description: "The task is to do something", date: "Date" },
    { priority: "High", bgColor: "bg-blue-500", title: "New Task", description: "The task is to do something", date: "Date" },
    { priority: "High", bgColor: "bg-gray-500", title: "New Task", description: "The task is to do something", date: "Date" },
    { priority: "High", bgColor: "bg-green-500", title: "New Task", description: "The task is to do something", date: "Date" },
    { priority: "High", bgColor: "bg-green-500", title: "New Task", description: "The task is to do something", date: "Date" },
  ];

  return (
    <div className=" rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 h-[40vh] w-full bg-red-400 p-5 overflow-y-auto">
      {tasks.map((task, index) => (
        <div key={index} className={`rounded-2xl p-5 ${task.bgColor} text-white shadow-lg `}>
          <div className="flex justify-between items-center">
            <span className="bg-amber-700 text-white font-semibold rounded-lg px-2 py-1">{task.priority}</span>
            <span className="text-gray-300 font-semibold">{task.date}</span>
          </div>

          <div className="mt-6">
            <h1 className="text-xl font-bold">{task.title}</h1>
            <p className="text-sm mt-2">{task.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
