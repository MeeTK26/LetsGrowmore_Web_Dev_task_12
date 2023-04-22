import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import UserCardGrid from "./components/UserCardGrid";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const data = await response.json();
        setUsers(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const handleGetUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navbar onGetUsers={handleGetUsers}
      />
      {loading ? (
  <div className="loader-container">
    <div className="loader-text">Loading...</div>
  </div>
) : (
  <UserCardGrid users={users} />
)}
    </div>
  );
};

export default App;
