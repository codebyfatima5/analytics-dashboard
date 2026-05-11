import axios from "axios";

export const fetchDashboardData = async () => {

  // Fake API Request using Axios
  await axios.get("https://jsonplaceholder.typicode.com/posts");

  return {

    revenue: [
      { name: "Jan", value: Math.floor(Math.random() * 1000) },
      { name: "Feb", value: Math.floor(Math.random() * 1000) },
      { name: "Mar", value: Math.floor(Math.random() * 1000) },
      { name: "Apr", value: Math.floor(Math.random() * 1000) },
    ],

    features: [
      { name: "Chat", value: Math.floor(Math.random() * 500) },
      { name: "Upload", value: Math.floor(Math.random() * 500) },
      { name: "Analytics", value: Math.floor(Math.random() * 500) },
    ],

    users: [
      { name: "Free", value: 70 },
      { name: "Premium", value: 30 },
    ],

    stats: {
      users: 1200 + Math.floor(Math.random() * 100),
      revenue: 8500 + Math.floor(Math.random() * 500),
      growth: 15,
      activeUsers: 900 + Math.floor(Math.random() * 50),
    },

  };
};