import { useState, useEffect } from "react";

const images = [
    "/images/accueil/image1.jpg",
    "/images/accueil/image2.jpg",
    "/images/accueil/image3.jpg",
    "/images/accueil/image4.jpg",
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const promises = images.map((src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = resolve;
            });
        });
        Promise.all(promises).then(() => setImagesLoaded(true));
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return; // ✅ on démarre le slider seulement après chargement
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [imagesLoaded]);

    return (
        // hauteur fixe sur la section, sinon les absolute n'ont pas de référence
        <section className="relative text-white overflow-hidden min-h-[600px] md:min-h-[700px]">

            {/* Skeleton — fond sombre pendant le chargement */}
            <div
                className={`absolute inset-0 bg-gray-900 transition-opacity duration-700 z-10 ${
                    imagesLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
                {/* Shimmer en inline style pour éviter les problèmes Tailwind */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                        animation: "shimmer 2s infinite",
                    }}
                />
            </div>

            {/* Images en fondu */}
            {images.map((img, index) => (
                <div
                    key={img}
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url(${img})`,
                        opacity: imagesLoaded && index === currentIndex ? 1 : 0,
                    }}
                />
            ))}

            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Contenu */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Découvrez les Meilleurs Événements au Bénin
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-200">
                        Concerts, Conférences, Expositions et plus encore
                    </p>
                    <div className="max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <input
                                type="text"
                                placeholder="Rechercher un événement..."
                                className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg"
                            />
                            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                                Rechercher
                            </button>
                        </div>
                    </div>
                </div>

                {/* Indicateurs (points) */}
                <div className="flex justify-center gap-2 mt-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? "bg-white w-6"
                                    : "bg-white/40 w-2.5"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}