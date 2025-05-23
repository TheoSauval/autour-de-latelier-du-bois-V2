import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import ProductCardHorizontal from "../../components/ProductCardHorizontal";
import ContactSection from "../../components/ContactSection";

export default function Produits() {
  return (
    <div className="min-h-screen w-full bg-green-800 flex flex-col items-center ">
      <Header />
      <section className="w-full max-w-7xl bg-[#7c6a58] py-16 flex flex-col items-center ">
        <h2 className="text-3xl text-green-200 font-bold text-center mb-8">
          Bienvenue sur la boutique en ligne <br /> d&apos;Autour de l&apos;atelier du bois
        </h2>
        <p className="text-center text-xl mb-8 leading-relaxed">
          Artisan tourneur sur bois et créateur d&apos;objets personnalisés, je vous invite à découvrir ici toutes mes réalisations faites main.<br /><br />
          Chaque pièce est unique, née de ma créativité et de mon imagination.<br /><br />
          <span className="font-semibold text-green-200">Tous les articles sont vendus hors taxe</span> (art. 293 B du CGI).<br /><br />
          <span className="font-semibold text-green-200">Livraison offerte</span> dans un rayon de 15&nbsp;km autour de l&apos;atelier.<br />
          Pour en profiter, contactez-moi afin de convenir ensemble d&apos;une date et d&apos;une heure.<br /><br />
          Vous souhaitez un objet en bois sur-mesure ? <span className="font-semibold">N&apos;&apos;hésitez pas à me contacter !</span>
        </p>
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <ProductCard
            image="/PHOTO_BOIS/Produits/Sans_titre.jpg"
            title="Mangeoire tournée"
            description="Mangeoire pour oiseaux, réalisée en ardoise et dans du bois local tourné (L&apos;essence du bois est aléatoire : chêne, frêne principalement, suivant les stocks en cours)."
            price="39.0€ HT"
          />
          <ProductCard
            image="/PHOTO_BOIS/400055015_292441806952231_6755825553447650735_n.jpg"
            title="Bols à emboitement"
            description="Lot de 4 bols en hêtre, empilables, pour une optimisation de l&apos;espace lors du rangement (10€ par bol supplémentaire)."
            price="39.0€ HT"
          />
          <ProductCard
            image="/PHOTO_BOIS/Produits/incubateur.jpg"
            title="Incubateur à abeilles ou bourdons"
            description="Incubateur en chêne, fabriqué à l&apos;atelier d&apos;après les dessins et schémas de ML Timber crafts, à abeilles ou bourdons. Plateaux modulables pour abeilles ou bourdons, possibilité de mettre un plateau pour chaque dans le même incubateur !"
            price="39.0€ HT"
          />
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 w-full p-4">
            <ProductCardHorizontal
              image="/PHOTO_BOIS/Produits/plateau.jpg"
              title="Plateaux en bois massif"
              description="Plateau en chêne, frêne ou merisier. Sur commande uniquement à partir de 300€ suivant l&apos;essence du bois et ses dimensions."
              price="300.0€ HT"
            />
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}