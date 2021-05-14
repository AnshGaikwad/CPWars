import { useState, useEffect } from "react";
import axios from "axios";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [error, setError] = useState("");
  const [homeData, setHomeData] = useState("");

  useEffect(() => {
    const fetchHomeDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/home", config);
        setHomeData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchHomeDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <div>{homeData}</div>
  );
};

export default HomeScreen;
