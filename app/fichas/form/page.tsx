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
            Preencha os campos abaixo para criar uma nova ficha.
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
            <label htmlFor="nivel" className="block text-lg font-semibold mb-2">
              Nível
            </label>
            <input
              type="number"
              id="nivel"
              name="nivel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite o nível"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-lg font-semibold mb-2"
            >
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite o status"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="habilidades"
              className="block text-lg font-semibold mb-2"
            >
              Habilidades
            </label>
            <input
              type="text"
              id="habilidades"
              name="habilidades"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite as habilidades"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="modificador"
              className="block text-lg font-semibold mb-2"
            >
              Modificador
            </label>
            <input
              type="text"
              id="modificador"
              name="modificador"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite o modificador"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="itens" className="block text-lg font-semibold mb-2">
              Itens
            </label>
            <input
              type="text"
              id="itens"
              name="itens"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite os itens"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="danos" className="block text-lg font-semibold mb-2">
              Danos
            </label>
            <input
              type="text"
              id="danos"
              name="danos"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite os danos"
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
        <p>
          Criado com ❤️ por <span className="font-bold">Vinícius</span>.
        </p>
      </footer>
    </div>
  );
}
