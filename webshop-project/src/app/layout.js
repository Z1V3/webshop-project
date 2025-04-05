import "./globals.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="bg-stone-400/50" style={{
          //backgroundColor: "#b1f8ff" 
        }}>

          <div className="fixed w-full">
            <div className="relative h-[55vh] w-full overflow-hidden -mb-56">
              <Image
                src={"/ui/highlight-1.jpg"}
                alt={"Picture header"}
                className="absolute w-full h-full object-cover [mask-image:radial-gradient(99%_99%_at_top,black,transparent)]"
                width={1600}
                height={1600}
              />
            </div>
            <div className="relative h-[55vh] w-full overflow-hidden -mb-48">
              <Image
                src={"/ui/bg-ph-1.jpg"}
                alt={"Picture header"}
                className="absolute w-full h-full object-cover [mask-image:radial-gradient(80%_52%_at_center,black,transparent)]"
                width={1600}
                height={1600}
              />
            </div>
            <div className="relative h-[55vh] w-full overflow-hidden">
              <Image
                src={"/ui/bg-ph-2.jpg"}
                alt={"Picture header"}
                className="absolute w-full h-full object-cover [mask-image:radial-gradient(100%_95%_at_bottom,black,transparent)]"
                width={1600}
                height={1600}
              />
            </div>
          </div>
          <Header />

          <main className="flex-grow min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}