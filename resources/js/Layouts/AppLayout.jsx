// resources/js/Layouts/AppLayout.jsx
import { Link, Head } from "@inertiajs/react";
import { useState } from "react";

export default function AppLayout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>EventMaster - Votre plateforme d'événements au Bénin</title>
                <meta name="description" content="Découvrez et créez des événements au Bénin avec EventMaster, votre plateforme d'événements incontournable." />
                <link rel="icon" href="/images/logo_beninbouge.png" />
            </Head>
            {/* Navigation */}
            <nav className="bg-white shadow-sm fixed w-full z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Logo - toujours visible */}
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-indigo-600"
                            >
                                <img
                                    src="/images/logo_beninbouge.png"
                                    alt="EventMaster"
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Menu desktop - caché sur mobile */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link
                                href="/events"
                                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Événements
                            </Link>
                            <Link
                                href="/categories"
                                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Catégories
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                À propos
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/create-event"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                            >
                                Créer un événement
                            </Link>
                        </div>

                        {/* Bouton menu mobile */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Ouvrir le menu</span>
                                {isMenuOpen ? (
                                    // Icône de fermeture (X)
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    // Icône de menu (hamburger)
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu mobile déroulant */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                href="/events"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Événements
                            </Link>
                            <Link
                                href="/categories"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Catégories
                            </Link>
                            <Link
                                href="/about"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                À propos
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <div className="pt-4">
                                <Link
                                    href="/create-event"
                                    className="block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Créer un événement
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Contenu principal avec padding-top pour éviter que la navbar fixed ne cache le contenu */}
            <main className="pt-16">{children}</main>

            {/* Footer simple pour compléter */}
            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <p className="text-center text-gray-500 text-sm">
                        © 2024 EventMaster. Tous droits réservés.
                    </p>
                </div>
            </footer>
        </div>
    );
}
