import Image from "next/image";
import Typewriter from "./Typewriter";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-green-800 flex flex-col items-center ">

      {/* Menu */}
      <Header />


      {/* Section Mon atelier */}
      <section className="w-full max-w-7xl bg-[#7c6a58] py-16 flex flex-col items-center ">
        <h2 className="text-3xl text-black font-bold text-center mb-8">
          Mon <span className="text-green-200">atelier</span>
        </h2>
        <div className="mb-8">
          <Typewriter />
        </div>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          <div className="bg-green-800 text-white rounded border border-black flex flex-col items-center justify-center h-72 w-full">
            <span className="text-2xl font-bold text-center mb-2">Tournage d&apos;une toupie en bois</span>
            <span className="text-center">Toupie en chêne avec vernis à la cire d&apos;abeille</span>
          </div>
          <Image src="/PHOTO_BOIS/DSC_0023.webp" alt="Atelier 1" width={400} height={288} className="object-cover h-72 w-full" />
          <div className="h-72 w-full overflow-hidden flex items-center justify-center">
            <video src="/PHOTO_BOIS/DSC_0025.mp4" autoPlay muted loop playsInline className="h-full w-auto object-cover block -rotate-90 scale-[1.34]" />
          </div>
          <Image src="/PHOTO_BOIS/DSC_0030.webp" alt="Atelier 3" width={400} height={288} className="object-cover h-72 w-full" />
          <div className="h-72 w-full overflow-hidden flex items-center justify-center">
            <video src="/PHOTO_BOIS/DSC_0031.mp4" autoPlay muted loop playsInline className="h-full w-auto object-cover block -rotate-90 scale-[1.34]" />
          </div>
          <Image src="/PHOTO_BOIS/DSC_0044.webp" alt="Atelier 3" width={400} height={288} className="object-cover h-72 w-full" />
        </div>
      </section>

      {/* Section Les articles */}
      <section className="w-full bg-[#7c6a58] max-w-7xl mx-auto py-8">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 max-w-6xl mx-auto">
          {/* Colonne 1, grande image sur 2 lignes */}
          <Image
            src="/PHOTO_BOIS/dsc-0118.webp"
            alt="Article 1"
            width={400}
            height={600}
            className="object-cover w-full h-full row-span-2 "
          />
          <Image
            src="/PHOTO_BOIS/DSC_0093.webp"
            alt="Article 2"
            width={400}
            height={600}
            className="object-cover w-full h-full row-span-2 "
          />
          <Image
            src="/PHOTO_BOIS/DSC_0077.webp"
            alt="Article 3"
            width={400}
            height={288}
            className="object-cover w-full h-full "
          />
          <Image
            src="/PHOTO_BOIS/DSC_0099.webp"
            alt="Article 4"
            width={400}
            height={288}
            className="object-cover w-full h-full "
          />
        </div>
      </section>

      {/* Section Contactez-moi */}
      <ContactSection />
    </div>
  );
}
