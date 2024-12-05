"use client";

import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateSession() {
  const router = useRouter();
  const [nome, setNome] = useState<string>("");
  const [user_id, setUserId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGoBack = () => {
    router.back(); // Volta para a página anterior
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newSession = {
      nome,
      user_id,
    };

    try {
      const response = await fetch("http://localhost:3333/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSession),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar sessão");
      }

      // Limpar campos após sucesso
      setNome("");
      setUserId("");
      alert("Sessão criada com sucesso!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center justify-center text-white">
      <header className="text-center mb-8 w-full">
        <button onClick={handleGoBack} className="text-white text-3xl">
          <IoArrowBackCircle />
        </button>
        <div>
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Criar Nova Sessão
          </h1>
          <p className="text-xl mt-4 font-light">
            Preencha os campos abaixo para criar uma nova sessão.
          </p>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center gap-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-purple-700 px-8 py-6 rounded-lg shadow-md max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="mb-4">
            <label htmlFor="nome" className="block text-lg font-semibold mb-2">
              Nome da Sessão
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite o nome da sessão"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="user_id"
              className="block text-lg font-semibold mb-2"
            >
              User ID
            </label>
            <input
              type="text"
              id="user_id"
              name="user_id"
              value={user_id}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite o ID do usuário"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition col-span-3"
            disabled={loading}
          >
            {loading ? "Criando..." : "Criar Sessão"}
          </button>
        </form>
      </main>

      <footer className="absolute bottom-4 text-center text-sm">
        <p></p>
      </footer>
    </div>
  );
}
