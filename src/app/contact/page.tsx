import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
    return (
        <div className="min-h-screen w-full bg-green-800 flex flex-col items-center ">
            <Header />
            <section className="w-full max-w-7xl mx-auto flex flex-col items-center bg-[#7c6a58] pt-16">
                <h1 className="text-3xl font-bold text-green-200 mb-2">Contactez-nous</h1>
                <p className="text-white text-center mt-4 max-w-xl text-xl">
                    Une demande particulière ou une question sur un objet ? N&apos;hésitez pas à me contacter!
                </p>
            </section>
            <ContactForm />
            <div className="w-full max-w-7xl mx-auto flex justify-center py-10 bg-[#7c6a58]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.123456789!2d2.123456!3d49.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7d123456789ab%3A0x123456789abcdef!2s37%20Rue%20des%20Moulins%20Bleus%2C%2080830%20L&#39;Etoile!5e0!3m2!1sfr!2sfr!4v1680000000000!5m2!1sfr!2sfr"
                    width="900"
                    height="400"
                    style={{ border: 0, borderRadius: "1rem" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <section className="w-full max-w-7xl mx-auto flex flex-col items-center bg-[#7c6a58] pt-16">
                <p className="text-center text-white">Copyright © 2023 Herent Aleksandre</p>
            </section>
        </div>
    );
}
