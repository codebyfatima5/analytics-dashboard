export default function Loader() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 animate-pulse">

      {/* Title */}
      <div className="h-10 bg-gray-300 rounded w-64 mb-6"></div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-300 h-24 rounded"></div>
        <div className="bg-gray-300 h-24 rounded"></div>
        <div className="bg-gray-300 h-24 rounded"></div>
        <div className="bg-gray-300 h-24 rounded"></div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-300 h-[300px] rounded"></div>
        <div className="bg-gray-300 h-[300px] rounded"></div>
        <div className="bg-gray-300 h-[300px] rounded md:col-span-2"></div>
      </div>

    </div>
  );
}