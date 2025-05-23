"use client";

import { useState } from "react";

export default function AdminLogin() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState("");

    // Récupère les identifiants depuis les variables d'environnement
    const adminUser = process.env.NEXT_PUBLIC_ADMIN_USER;
    const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASS;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.username === adminUser && form.password === adminPass) {
            setError("");
            setShowModal(true);
        } else {
            setError("Identifiants incorrects");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-800">
            <form
                onSubmit={handleSubmit}
                className="bg-[#7c6a58] p-8 rounded-xl shadow-lg flex flex-col gap-4 w-full max-w-sm"
            >
                <h1 className="text-2xl font-bold text-green-200 text-center mb-4">Connexion Admin</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Nom d&apos;utilisateur"
                    value={form.username}
                    onChange={handleChange}
                    className="p-3 rounded border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    value={form.password}
                    onChange={handleChange}
                    className="p-3 rounded border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
                    required
                />
                {error && <div className="text-red-500 text-center">{error}</div>}
                <button
                    type="submit"
                    className="bg-green-700 text-white font-bold py-3 rounded hover:bg-green-800 transition"
                >
                    Se connecter
                </button>
            </form>

            {/* Modal d'infos */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full text-center">
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Bienvenue dans l&apos;espace admin !</h2>
                        <p className="mb-4 text-gray-700">
                            Merci de contacter Aleksandre au 0644876769 pour vouloir ajouter un nouveau produit
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-green-700 text-white font-bold py-2 px-6 rounded hover:bg-green-800 transition"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}