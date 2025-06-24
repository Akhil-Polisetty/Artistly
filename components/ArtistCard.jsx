export default function ArtistCard({ artist }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs">
      <h3 className="text-xl font-semibold">{artist.name}</h3>
      <p className="text-gray-600">{artist.category}</p>
      <p className="text-sm">💰 {artist.priceRange}</p>
      <p className="text-sm">📍 {artist.location}</p>
      <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
        Ask for Quote
      </button>
    </div>
  );
}
