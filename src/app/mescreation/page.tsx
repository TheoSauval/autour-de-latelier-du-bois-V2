import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

export default function MesCreation() {
    return (
        <div className="min-h-screen w-full bg-green-800 flex flex-col items-center ">
            <Header />
            <section className="w-full max-w-7xl mx-auto flex flex-col items-center bg-[#7c6a58] pt-16">
                <h1 className="text-3xl font-bold text-green-200 mb-2">Mes Créations</h1>
                <p className="text-lg text-white text-center max-w-2xl mb-6">Découvrez ici quelques-unes de mes réalisations en bois, toutes faites main dans mon atelier. Chaque pièce est unique et reflète ma passion pour le travail du bois.</p>
                <div className="my-8 w-full">
                    <Carousel />
                </div>
            </section>
            <section className="w-full max-w-7xl mx-auto flex flex-col items-center bg-[#7c6a58] pt-16">
                <p className="text-center text-white">Copyright © 2023 Herent Aleksandre</p>
            </section>
        </div>
    );
}