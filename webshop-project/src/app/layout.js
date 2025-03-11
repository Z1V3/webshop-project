import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
