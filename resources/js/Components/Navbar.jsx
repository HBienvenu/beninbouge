import { Link } from "@inertiajs/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuVariants = {
        hidden: { 
            opacity: 0,
            height: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        visible: { 
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    const itemVariants = {
        hidden: (custom) => ({ 
            opacity: 0,
            x: -20,
            transition: { duration: 0.2 }
        }),
        visible: (custom) => ({ 
            opacity: 1,
            x: 0,
            transition: { delay: custom * 0.1, duration: 0.3 }
        })
    };

    return (
        <nav className="bg-white shadow-sm fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-indigo-600">
                            <img
                                src="/images/logo_beninbouge.png"
                                alt="BeninBouge Logo"
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Menu desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/events" className="text-gray-700 hover:text-[#229951] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Projets Structurels
                        </Link>
                        <Link href="/categories" className="text-gray-700 hover:text-[#229951] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Actualités
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-[#229951] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Evenements
                        </Link>
                        <Link href="/create-event" className="bg-[#008651] text-white px-4 py-2 rounded-lg hover:bg-[#229951] transition-colors text-sm font-medium">
                            Contact
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
                            <motion.svg
                                className="h-6 w-6"
                                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </motion.svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile avec animations Framer Motion */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {[
                                { href: "/events", label: "Projets Structurels" },
                                { href: "/categories", label: "Actualités" },
                                { href: "/about", label: "Evenements" }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                >
                                    <Link
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#229951] hover:bg-gray-50 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                custom={3}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="pt-4"
                            >
                                <Link
                                    href="/create-event"
                                    className="block w-full text-center bg-[#008651] text-white px-4 py-2 rounded-lg hover:bg-[#229951] transition-colors text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}