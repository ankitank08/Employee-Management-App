import React from "react";
import Header from "../../other/Header";
import TaskNumberList from "../../other/TaskNumberList";
import TaskList from "../Tasks/TaskList";

const EmployeeDashboard = ({ onLogout }) => {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900 text-white overflow-y-auto">
      {/* Sticky Header to stay on top */}
      <Header title="Employee Dashboard" onLogout={onLogout} className="sticky top-0 z-50" />

      {/* Scrollable Content Area */}
      <div className="flex flex-col items-center py-8 gap-6 w-full">
        {/* TaskNumberList Section */}
        <div className="w-full max-w-6xl bg-gray-800 p-6 rounded-xl shadow-lg">
          <TaskNumberList />
        </div>

        {/* TaskList Section */}
        <div className="w-full max-w-6xl bg-gray-800 p-6 py-3 rounded-xl shadow-lg">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
