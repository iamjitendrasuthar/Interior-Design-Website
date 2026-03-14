import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Js Interiors",
  description: "Premium Interior Design for Modern Homes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#132A13] font-sans selection:bg-[#132A13] selection:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
