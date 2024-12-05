"use client";

import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateUser() {
  const router = useRouter();
  const [name, setNome] = useState<string>("");
  const [password, setUserId] = useState<string>("");
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
      name,
      password,
    };

    try {
      const response = await fetch("http://localhost:3333/users", {
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
      <header className="w-full flex items-center justify-between px-6 mb-8">
        <button onClick={handleGoBack} className="text-white text-3xl">
          <IoArrowBackCircle />
        </button>
        <div className="text-center flex-1">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Criar Novo Usuário
          </h1>
          <p className="text-xl mt-4 font-light">
            Preencha os campos abaixo para criar um novo usuário.
          </p>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center gap-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-purple-700 px-8 py-6 rounded-lg shadow-md max-w-sm w-full"
        >
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
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
