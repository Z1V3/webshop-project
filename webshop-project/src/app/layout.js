import "./globals.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/header/Header";

export default function RootLayout({ children }) {

  const backgroundStyle =
  {
    backgroundImage: "url('/bg-01.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="bg-sky-400/30">
          <Header />
          <div
            className="fixed container flex flex-col left-[10vw] h-[100vw] md:rounded-full sm:overflow-clip md:overflow-visible"
            style={backgroundStyle}
          >
          </div>
          <main className="flex-grow min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}