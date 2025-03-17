import React from "react";

const TaskNumberList = () => {
  const taskData = [
    { count: 0, label: "New Task", bgColor: "bg-red-400" },
    { count: 1, label: "In Progress", bgColor: "bg-blue-500" },
    { count: 2, label: "Pending Review", bgColor: "bg-yellow-500" },
    { count: 3, label: "Completed", bgColor: "bg-green-400" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
      {taskData.map((task, index) => (
        <div
          key={index}
          className={`rounded-xl p-6 ${task.bgColor} text-white flex flex-col items-center justify-center shadow-lg transition-all duration-200 hover:scale-105`}
        >
          <h1 className="text-4xl font-black">{task.count}</h1>
          <h2 className="text-2xl font-bold">{task.label}</h2>
        </div>
      ))}
    </div>
  );
};

export default TaskNumberList;
