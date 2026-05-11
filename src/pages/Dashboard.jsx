import { useEffect, useState } from "react";

import KPICard from "../components/KPI/KPICard";

import LineChartComponent from "../components/charts/LineChartComponent";
import BarChartComponent from "../components/charts/BarChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";

import Loader from "../components/common/Loader";
import DateFilter from "../components/filters/DateFilter";

import { fetchDashboardData } from "../services/api";
import { exportCSV } from "../services/exportCSV";

export default function Dashboard() {

  // Date Filter State
  const [range, setRange] = useState("7d");

  // Dashboard Data State
  const [data, setData] = useState(null);

  // Auto Refresh Every 30 Seconds
  useEffect(() => {

    const getData = async () => {
      const res = await fetchDashboardData();
      setData(res);
    };

    // Initial Fetch
    getData();

    // Auto Polling
    const interval = setInterval(getData, 30000);

    // Cleanup
    return () => clearInterval(interval);

  }, [range]);

  // Loading Skeleton
  if (!data) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

        <h1 className="text-3xl font-bold text-gray-800">
          Analytics Dashboard
        </h1>

        {/* Date Filter */}
        <DateFilter value={range} onChange={setRange} />

      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

        <KPICard
          title="Users"
          value={data.stats.users}
        />

        <KPICard
          title="Revenue"
          value={`$${data.stats.revenue}`}
        />

        <KPICard
          title="Growth"
          value={`${data.stats.growth}%`}
        />

        <KPICard
          title="Active Users"
          value={data.stats.activeUsers}
        />

      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Line Chart */}
        <div
          className="bg-white p-4 rounded shadow"
          style={{ height: 350 }}
        >

          <div className="flex justify-between items-center mb-2">

            <h2 className="font-semibold">
              Revenue Trends
            </h2>

            <button
              onClick={() =>
                exportCSV(data.revenue, "revenue-data")
              }
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
            >
              Export CSV
            </button>

          </div>

          <LineChartComponent data={data.revenue} />

        </div>

        {/* Bar Chart */}
        <div
          className="bg-white p-4 rounded shadow"
          style={{ height: 350 }}
        >

          <div className="flex justify-between items-center mb-2">

            <h2 className="font-semibold">
              Feature Usage
            </h2>

            <button
              onClick={() =>
                exportCSV(data.features, "feature-data")
              }
              className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
            >
              Export CSV
            </button>

          </div>

          <BarChartComponent data={data.features} />

        </div>

        {/* Pie Chart */}
        <div
          className="bg-white p-4 rounded shadow md:col-span-2"
          style={{ height: 350 }}
        >

          <div className="flex justify-between items-center mb-2">

            <h2 className="font-semibold">
              User Segmentation
            </h2>

            <button
              onClick={() =>
                exportCSV(data.users, "user-data")
              }
              className="bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600"
            >
              Export CSV
            </button>

          </div>

          <PieChartComponent data={data.users} />

        </div>

      </div>

    </div>
  );
}