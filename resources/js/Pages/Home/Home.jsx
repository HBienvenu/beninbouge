import { Head, Link } from "@inertiajs/react";
import AppLayout from "../../Layouts/AppLayout";
import { useEffect } from "react";
import { animate } from "animejs";
import HeroSection from "./HeroSection";
import RechercheSection from "./RechercheSection";
import EvenementPasse from "./EvenementPasse";
import Service from "./Service";

export default function Home() {

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
            <HeroSection />

            {/* Categories Section */}
            <RechercheSection />

            {/* Featured Events */}
            <EvenementPasse />

            {/* Service */}
            <Service />

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
            
        </AppLayout>
    );
}
