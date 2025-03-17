const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Prepare Report",
        task_description: "Compile the quarterly financial report.",
        task_date: "2025-03-01",
        category: "Finance",
        active: true,
        new_task: false,
        completed: false,
        failed: false,
      },
      {
        task_title: "Budget Analysis",
        task_description: "Analyze the company's budget for the next quarter.",
        task_date: "2025-03-02",
        category: "Finance",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Client Meeting",
        task_description: "Meet with the client to discuss project scope.",
        task_date: "2025-03-03",
        category: "Meetings",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        task_title: "Project Planning",
        task_description: "Draft the project plan for the upcoming sprint.",
        task_date: "2025-03-04",
        category: "Project Management",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Code Review",
        task_description: "Review pull requests for the development team.",
        task_date: "2025-03-05",
        category: "Development",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        task_title: "Bug Fixing",
        task_description: "Resolve critical bugs reported by QA.",
        task_date: "2025-03-06",
        category: "Development",
        active: false,
        new_task: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    name: "Diana Lee",
    email: "diana@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Marketing Strategy",
        task_description: "Develop a new marketing strategy for Q2.",
        task_date: "2025-03-07",
        category: "Marketing",
        active: false,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        task_title: "Social Media Campaign",
        task_description: "Launch the new social media campaign.",
        task_date: "2025-03-08",
        category: "Marketing",
        active: true,
        new_task: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    name: "Ethan Brown",
    email: "ethan@example.com",
    password: "123",
    tasks: [
      {
        task_title: "Inventory Check",
        task_description: "Conduct a full inventory check in the warehouse.",
        task_date: "2025-03-09",
        category: "Operations",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        task_title: "Supply Order",
        task_description: "Order new supplies for the office.",
        task_date: "2025-03-10",
        category: "Operations",
        active: true,
        new_task: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

/**
 * Saves employees and admin data to localStorage as a single object.
 */
export const setLocalStorage = () => {
  const appData = { employees, admin };
  localStorage.setItem("appData", JSON.stringify(appData));
};

/**
 * Retrieves employees and admin data from localStorage.
 * @returns {Object} An object containing employees and admin data.
 */
export const getLocalStorage = () => {
  return (
    JSON.parse(localStorage.getItem("appData")) || { employees: [], admin: [] }
  );
};

/**
 * Saves the logged-in user to localStorage.
 * @param {Object} user - The user object containing role, email, and name.
 */
export const setUserInLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

/**
 * Retrieves the logged-in user from localStorage.
 * @returns {Object|null} - The logged-in user object or null if not found.
 */
export const getLocalStorageUser = () => {
  let data = JSON.parse(localStorage.getItem("appData"));

  if (!data) {
    setLocalStorage(); // This will save the initial employees/admin data
    data = { employees, admin }; // Use the default dataset
  }

  return data;
};

/**
 * Removes the logged-in user from localStorage (for logout).
 */
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
