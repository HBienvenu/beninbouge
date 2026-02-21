import { Link } from "@inertiajs/react";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaTiktok,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
    { label: "Instagram", href: "https://instagram.com/beninbouge", icon: <FaInstagram className="w-5 h-5" />, color: "hover:bg-pink-600" },
    { label: "Facebook", href: "https://facebook.com/BeninBouge", icon: <FaFacebookF className="w-5 h-5" />, color: "hover:bg-blue-600" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/beninbouge/", icon: <FaLinkedinIn className="w-5 h-5" />, color: "hover:bg-blue-700" },
    { label: "TikTok", href: "https://www.tiktok.com/@beninbouge", icon: <FaTiktok className="w-5 h-5" />, color: "hover:bg-black" },
    { label: "YouTube", href: "https://www.youtube.com/@BeninBouge", icon: <FaYoutube className="w-5 h-5" />, color: "hover:bg-red-600" },
    { label: "WhatsApp", href: "https://www.whatsapp.com/channel/0029VawBRd9Ae5VzCgN1L23i", icon: <FaWhatsapp className="w-5 h-5" />, color: "hover:bg-green-600" },
    { label: "X (Twitter)", href: "https://x.com/BeninBouge", icon: <FaXTwitter className="w-5 h-5" />, color: "hover:bg-gray-700" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Branding */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#229951]">BENIN BOUGE</h3>
                        <p className="text-gray-400">
                            Votre plateforme de référence pour la gestion d'événements au Bénin
                        </p>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h4 className="font-semibold mb-4">Liens rapides</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">Projets Structurels</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Actualités</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">Evenements</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>contact@beninbouge.bj</li>
                            <li>+229 01 97 67 77 54 / 01 66 61 78 78</li>
                            <li>Cotonou, Bénin</li>
                        </ul>
                    </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <p className="text-center text-gray-400 mb-4">Suivez-nous</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {socialLinks.map(({ label, href, icon, color }) => (
                            <a
                                key={label}
                                href={href}
                                title={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-gray-800 ${color} p-3 rounded-full transition-colors duration-200 text-white`}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 mt-6">
                        &copy; {new Date().getFullYear()} Benin Bouge. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}