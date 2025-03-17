import React from "react";

const tasks = [
  { id: 1, name: "Ankit", description: "This is new task", status: "Pending" },
  { id: 2, name: "Rahul", description: "Complete the report", status: "In Progress" },
  { id: 3, name: "Sita", description: "Fix UI bugs", status: "Completed" },
  { id: 4, name: "Mohan", description: "Database optimization", status: "Pending" },
  { id: 5, name: "Priya", description: "Code review", status: "In Progress" },
];

const TaskItem = ({ name, description, status }) => (
  <div className="flex mt-1 bg-blue-400 w-full rounded-xl text-white font-semibold items-center justify-between px-4 py-3 transition-all duration-200 hover:bg-gray-600 hover:scale-[1.02]">
    <h2 className="truncate w-1/4">{name}</h2>
    <h3 className="truncate w-1/2">{description}</h3>
    <h5 className="truncate w-1/4">{status}</h5>
  </div>
);


const AllTasks = () => {
  return (
    <div className="w-full mt-3 px-3 py-3 bg-gray-800 overflow-auto h-[250px] rounded-lg shadow-md">
      {tasks.map((task) => (
        <TaskItem key={task.id} name={task.name} description={task.description} status={task.status} />
      ))}
    </div>
  );
};

export default AllTasks;
