import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
 const categories = [
    { title: 'Singers', imageUrl: '/singer.avif' },
    { title: 'Dancers', imageUrl: '/dancer.avif' },
    { title: 'Speakers', imageUrl: '/speaker.avif' },
    { title: 'DJs', imageUrl: '/dj.avif' }
  ];

  return (
    <>
      
      <Hero />

      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6">Artist Categories</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} title={cat.title} imageUrl={cat.imageUrl} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
