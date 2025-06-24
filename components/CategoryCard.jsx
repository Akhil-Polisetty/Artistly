export default function CategoryCard({ title, imageUrl }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
      <img src={imageUrl} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}
