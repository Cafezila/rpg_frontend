"use client";

import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function CreateCharacter() {
  const router = useRouter(); // Hook para navegação

  const handleGoBack = () => {
    router.back(); // Volta para a página anterior
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center justify-center text-white">
      <header className="text-center mb-8 w-full flex justify-center items-center px-6">
        <button onClick={handleGoBack} className="text-white text-3xl">
          <IoArrowBackCircle />
        </button>
        <div className="w-full text-center">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Criar Novo Personagem
          </h1>
          <p className="text-xl mt-4 font-light">
            Preencha os campos abaixo para criar um novo personagem.
          </p>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center gap-6">
        <form className="bg-white text-purple-700 px-8 py-6 rounded-lg shadow-md max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite o nome"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="raca" className="block text-lg font-semibold mb-2">
              Raça
            </label>
            <input
              type="text"
              id="raca"
              name="raca"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite a raça"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="classe"
              className="block text-lg font-semibold mb-2"
            >
              Classe
            </label>
            <input
              type="text"
              id="classe"
              name="classe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite a classe"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="pontos_de_vida"
              className="block text-lg font-semibold mb-2"
            >
              Pontos de vida
            </label>
            <input
              type="text"
              id="pontos_de_vida"
              name="pontos_de_vida"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite os pontos de vida"
              required
            />
          </div>
          

          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-lg font-semibold mb-2"
            >
              Session
            </label>
            <input
              type="text"
              id="session_id"
              name="session_id"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite o status"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition col-span-3"
          >
            Criar Ficha
          </button>
        </form>
      </main>

      <footer className="absolute bottom-4 text-center text-sm">
        <p></p>
      </footer>
    </div>
  );
}
