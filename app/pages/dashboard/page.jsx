"use client";
import ArtistTable from "@/components/ArtistTable";
import { useEffect, useState } from "react";

export default function ManagerDashboard() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch("/data/submissions.json")
      .then((res) => res.json())
      .then((data) => setSubmissions(data))
      .catch((err) => console.error("Error loading submissions:", err));
  }, []);

 const handleArtistAction = (action, artist) => {
  switch (action) {
    case "view":
      alert(`Viewing: ${artist.name}`);
      break;
    case "approve":
      alert(`Approved: ${artist.name}`);
      break;
    case "reject":
      alert(`Rejected: ${artist.name}`);
      break;
    default:
      break;
  }
};


  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>
      <ArtistTable data={submissions} onAction={handleArtistAction} />

    </div>
  );
}
