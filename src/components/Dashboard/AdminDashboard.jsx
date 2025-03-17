import React from "react";
import CreateTask from "../../other/CreateTask";
import Header from "../../other/Header";
import AllTasks from "../../other/AllTasks";

const AdminDashboard = ({ onLogout }) => {
  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      <Header title="Admin Dashboard" onLogout={onLogout} />
      <div className="bg-black flex-1 flex flex-col items-center p-6">
        <CreateTask />
        <AllTasks />
      </div>
    </div>
  );
};

export default AdminDashboard;
