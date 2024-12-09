"use client";

import { useEffect, useState } from "react";
import { FiHome, FiPlusCircle, FiTrash2 } from "react-icons/fi";

interface Ficha {
  id: string;
  nome: string;
  created_at: string;
  updated_at: string;
}

const CardsPage = () => {
  const [fichas, setFichas] = useState<Ficha[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFichas = async () => {
      try {
        const response = await fetch("http://localhost:3333/personagem");
        if (!response.ok) {
          throw new Error("Erro ao buscar fichas");
        }
        const data = await response.json();
        setFichas(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFichas();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3333/personagem/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Erro ao deletar ficha");
      }
      setFichas((prev) => prev.filter((ficha) => ficha.id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading)
    return <p className="text-center text-gray-600">Carregando...</p>;
  if (error)
    return <p className="text-center text-red-500">Erro: {error}</p>;

  return (
    <div className="min-h-screen bg-purple-50 p-8 font-poppins">
      <div className="flex justify-between items-center mb-6">
        <a
          href="/"
          className="text-purple-800 flex items-center space-x-2 text-lg hover:underline"
        >
          <FiHome size={20} />
          <span>Home</span>
        </a>
        <a
          href="/fichas/form"
          className="text-purple-800 flex items-center space-x-2 text-lg hover:underline"
        >
          <FiPlusCircle size={20} />
          <span>Adicionar Ficha</span>
        </a>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6 text-purple-900">
        Fichas de Personagens
      </h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-purple-600 text-white">
            <tr>
              <th className="px-6 py-3">Nome</th>
              <th className="px-6 py-3">Criado em</th>
              <th className="px-6 py-3">Atualizado em</th>
              <th className="px-6 py-3 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {fichas.map((ficha) => (
              <tr
                key={ficha.id}
                className="bg-gray-50 border-b hover:bg-gray-100"
              >
                <td className="px-6 py-4 font-medium text-purple-700">
                  {ficha.nome}
                </td>
                <td className="px-6 py-4 text-purple-700">
                  {new Date(ficha.created_at).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-purple-700">
                  {new Date(ficha.updated_at).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleDelete(ficha.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Deletar ficha"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardsPage;