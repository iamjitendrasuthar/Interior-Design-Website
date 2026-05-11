import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { headers } from "next/headers";

export const metadata = {
  title: "Js Interiors",
  description: "Premium Interior Design for Modern Homes",
  icons: {
    icon: "https://framerusercontent.com/images/fNCAHGamGdHb8NnhNH6TCD49o.png",
  },
};

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  const isAdminPage = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body
        className="bg-white text-[#132A13] font-sans selection:bg-[#132A13] selection:text-white"
        style={{ position: "relative" }}
      >
        {!isAdminPage && <Navbar />}

        <main className="min-h-screen">
          {children}
          {!isAdminPage && <WhatsAppWidget />}
        </main>

        {!isAdminPage && <Footer />}
      </body>
    </html>
  );
}
