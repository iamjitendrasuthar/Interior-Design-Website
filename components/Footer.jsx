import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f281e] text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 rounded-full bg-white"></div>
              <span className="text-2xl font-semibold">JS Interior</span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              The journey of turning your house into a dream palace starts here.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <Facebook size={20} />
                </div>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-colors">
                  <Instagram size={20} />
                </div>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noreferrer">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                  <Youtube size={20} />
                </div>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <Linkedin size={20} />
                </div>
              </Link>
            </div>
          </div>

          <div style={{ zIndex: "0" }}>
            <h4 className="font-medium mb-6 text-lg">Pages</h4>
            <ul className="flex flex-col gap-3 opacity-70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div style={{ zIndex: "0" }}>
            <h4 className="font-medium mb-6 text-lg">Information</h4>
            <ul className="flex flex-col gap-3 opacity-70">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm z-0">
          <p>© 2026 JS Interiors, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
