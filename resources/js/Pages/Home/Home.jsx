import { Head, Link } from "@inertiajs/react";
import AppLayout from "../../Layouts/AppLayout";
import { useEffect } from "react";
import { animate } from "animejs";
import Footer from "../../Components/Footer";

export default function Home() {
    const featuredEvents = [
        {
            id: 1,
            title: "Festival International de Cotonou",
            date: "15-20 Décembre 2024",
            location: "Cotonou, Bénin",
            image: "/images/festival.jpg",
            price: "À partir de 5000 FCFA",
            category: "Musique",
        },
        {
            id: 2,
            title: "Conférence Tech Africa",
            date: "10-12 Janvier 2025",
            location: "Cotonou, Bénin",
            image: "/images/tech-conf.jpg",
            price: "15000 FCFA",
            category: "Technologie",
        },
        {
            id: 3,
            title: "Exposition d'Art Contemporain",
            date: "5-20 Février 2025",
            location: "Ouidah, Bénin",
            image: "/images/art-expo.jpg",
            price: "Gratuit",
            category: "Art",
        },
        {
            id: 4,
            title: "Marché des Saveurs du Bénin",
            date: "25-28 Mars 2025",
            location: "Porto-Novo, Bénin",
            image: "/images/food-market.jpg",
            price: "2000 FCFA",
            category: "Gastronomie",
        },
    ];

    const categories = [
        { name: "Musique", icon: "🎵", count: 45, color: "bg-red-100" },
        { name: "Sport", icon: "⚽", count: 32, color: "bg-green-100" },
        { name: "Art", icon: "🎨", count: 28, color: "bg-purple-100" },
        { name: "Business", icon: "💼", count: 56, color: "bg-blue-100" },
        { name: "Gastronomie", icon: "🍽️", count: 41, color: "bg-yellow-100" },
        { name: "Technologie", icon: "💻", count: 23, color: "bg-indigo-100" },
    ];

    const testimonials = [
        {
            name: "Aminata Diallo",
            role: "Organisatrice",
            content:
                "EventMaster a révolutionné la façon dont je gère mes événements. La plateforme est intuitive et efficace.",
            avatar: "/images/avatar1.jpg",
            rating: 5,
        },
        {
            name: "Koffi Mensah",
            role: "Participant",
            content:
                "Je trouve toujours des événements intéressants près de chez moi. La réservation est simple et rapide.",
            avatar: "/images/avatar2.jpg",
            rating: 5,
        },
        {
            name: "Yaa Asantewaa",
            role: "Artiste",
            content:
                "Une plateforme exceptionnelle pour promouvoir son art et se connecter avec son public.",
            avatar: "/images/avatar3.jpg",
            rating: 5,
        },
    ];

    useEffect(() => {
        animate(".mon-element", {
            translateY: 10,
            duration: 1000,
        });
    }, []);

    return (
        <AppLayout>
            <Head title="Accueil - EventMaster" />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
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
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className="text-3xl font-bold text-center mb-12"
                        data-aos="fade-up"
                    >
                        Catégories Populaires
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/categories/${category.name.toLowerCase()}`}
                                className={`${category.color} p-6 rounded-lg text-center hover:shadow-lg transition transform hover:-translate-y-1`}
                            >
                                <div className="text-4xl mb-3">
                                    {category.icon}
                                </div>
                                <h3 className="font-semibold text-gray-800">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {category.count} événements
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Events */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold">
                            Événements à venir
                        </h2>
                        <Link
                            href="/events"
                            className="text-indigo-600 hover:text-indigo-700 font-semibold"
                        >
                            Voir tout →
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredEvents.map((event) => (
                            <Link
                                key={event.id}
                                href={`/events/${event.id}`}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
                            >
                                <div className="h-48 bg-gray-300 relative">
                                    <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                                        {event.category}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg mb-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 mb-2">
                                        <span className="mr-2">📅</span>{" "}
                                        {event.date}
                                    </p>
                                    <p className="text-gray-600 mb-2">
                                        <span className="mr-2">📍</span>{" "}
                                        {event.location}
                                    </p>
                                    <p className="text-indigo-600 font-semibold">
                                        {event.price}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Comment ça marche
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🔍</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                1. Recherchez
                            </h3>
                            <p className="text-gray-600">
                                Trouvez des événements qui vous intéressent près
                                de chez vous
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">📅</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                2. Réservez
                            </h3>
                            <p className="text-gray-600">
                                Réservez vos places en quelques clics en toute
                                sécurité
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🎉</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">
                                3. Profitez
                            </h3>
                            <p className="text-gray-600">
                                Participez à l'événement et créez des souvenirs
                                inoubliables
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-indigo-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Vous organisez un événement ?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8">
                        Rejoignez des milliers d'organisateurs et touchez un
                        public plus large
                    </p>
                    <Link
                        href="/create-event"
                        className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block"
                    >
                        Créer votre événement
                    </Link>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 mon-element">
                        Ce que disent nos utilisateurs
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-xl"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                    <div>
                                        <h4 className="font-semibold">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex text-yellow-400">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <span key={i}>★</span>
                                        ),
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </AppLayout>
    );
}
