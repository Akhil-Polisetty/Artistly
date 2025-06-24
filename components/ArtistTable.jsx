export default function ArtistTable({ data, onAction }) {
  if (!data.length) {
    return <p className="text-center text-gray-500">No artist submissions found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">City</th>
            <th className="p-3">Fee</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist) => (
            <tr key={artist.id} className="border-t">
              <td className="p-3">{artist.name}</td>
              <td className="p-3">{artist.category.join(", ")}</td>
              <td className="p-3">{artist.city}</td>
              <td className="p-3">{artist.fee}</td>
              <td className="p-3">
                <button
                  onClick={() => onAction(artist)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
