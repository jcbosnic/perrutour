// src/components/DogCarouselHorizontal.jsx
import { useRef } from "react";

export default function DogCarouselHorizontal() {
  // --- DATA INTERNA ---
  const dogs = [
    { id: 1, name: "Kanye", imageUrl: "/kanye.jpg" },

  ];

  const carouselRef = useRef();





  return (
    <section className="w-full py-8 px-4 bg-dogs">
      <h2 className="text-center text-[45px] font-bold  mb-4">
        Perritos Felices 
      </h2>

      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-8  justify-center"
      >
        {dogs.map((dog) => (
          <div
            key={dog.id}
            className="flex-shrink-0 snap-center w-28 flex flex-col items-center"
          >
            <div className="w-[200px] h-[200px] rounded-xl overflow-hidden shadow-md border border-slate-200">
              <img
                src={dog.imageUrl}
                alt={dog.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-[22px] text-center">
              {dog.name}
            </p>
          </div>
        ))}
      </div>

      {/* --- BOTÓN DERECHO --- */}
     
    </section>
  );
}
