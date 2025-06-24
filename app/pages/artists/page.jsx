"use client";
import ArtistCard from "@/components/ArtistCard";
import Filters from "@/components/Filters";
import { useEffect, useState } from "react";


export default function ExploreArtists() {
  const [allArtists, setAllArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    priceRange: ""
  });

  useEffect(() => {
    fetch("/data/artists.json")
      .then((res) => res.json())
      .then((data) => {
        setAllArtists(data);
        setFilteredArtists(data);
      })
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  useEffect(() => {
    const filtered = allArtists.filter((artist) => {
      const categoryMatch = !filters.category || artist.category === filters.category;
      const locationMatch = !filters.location || artist.location === filters.location;
      const priceMatch = !filters.priceRange || artist.priceRange === filters.priceRange;
      return categoryMatch && locationMatch && priceMatch;
    });
    setFilteredArtists(filtered);
  }, [filters, allArtists]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: "",
      location: "",
      priceRange: ""
    });
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Explore Artists</h1>
      <Filters filters={filters} onChange={handleFilterChange} onClear={handleClearFilters} />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No artists match the selected filters.</p>
        )}
      </div>
    </main>
  );
}
