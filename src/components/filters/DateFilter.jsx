export default function DateFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded shadow-sm"
    >
      <option value="7d">Last 7 Days</option>
      <option value="30d">Last 30 Days</option>
      <option value="90d">Last 90 Days</option>
    </select>
  );
}