export default function ArtistTable({ data, onAction }) {
  if (!data.length) {
    return <p className="text-center text-gray-500 mt-10">No artist submissions found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-purple-100 to-indigo-100">
          <tr className="text-left text-sm font-semibold text-gray-700">
            <th className="p-4">Name</th>
            <th className="p-4">Category</th>
            <th className="p-4">City</th>
            <th className="p-4">Fee</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist, index) => (
            <tr
              key={artist.id}
              className={`border-b hover:bg-gray-50 transition ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="p-4 font-medium text-gray-800">{artist.name}</td>
              <td className="p-4 text-gray-600">{artist.category.join(", ")}</td>
              <td className="p-4 text-gray-600">{artist.city}</td>
              <td className="p-4 text-gray-600">{artist.fee}</td>
              <td className="p-4 flex gap-2 flex-wrap">
                <button
                  onClick={() => onAction("view", artist)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                >
                  View
                </button>
                <button
                  onClick={() => onAction("approve", artist)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => onAction("reject", artist)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
