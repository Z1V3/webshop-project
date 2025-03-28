import "./globals.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/header/Header";

export default function RootLayout({ children }) {

  const backgroundStyle =
  {
    backgroundImage: "url('/ui/bg.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="bg-stone-400/50" style={{

          //backgroundColor: "#b1f8ff" 

          //backgroundImage: "url('/ui/white-bg.jpg')",
          //backgroundSize: "contain",
          //backgroundPosition: "center",
        }}>
          <Header />
          <div
            className="fixed z-0 container h-[100vw] md:rounded-full sm:overflow-clip md:overflow-visible"
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