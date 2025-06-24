export default function Filters({ filters, onChange, onClear }) {
  return (
    <div className="bg-white shadow p-4 mb-6 rounded-lg grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
      <select className="p-2 border rounded" onChange={(e) => onChange("category", e.target.value)} value={filters.category}>
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Speaker">Speaker</option>
      </select>

      <select className="p-2 border rounded" onChange={(e) => onChange("location", e.target.value)} value={filters.location}>
        <option value="">All Locations</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>

      <select className="p-2 border rounded" onChange={(e) => onChange("priceRange", e.target.value)} value={filters.priceRange}>
        <option value="">All Price Ranges</option>
        <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
        <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
        <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</option>
        <option value="₹20,000 - ₹30,000">₹20,000 - ₹30,000</option>
      </select>

      <button
        onClick={onClear}
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
      >
        Clear Filters
      </button>
    </div>
  );
}
