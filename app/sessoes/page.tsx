"use client";

import { useEffect, useState } from "react";

interface Sessao {
  id: string;
  user_id: string;
  nome: string;
  created_at: string;
  updated_at: string;
}

const SessionsPage = () => {
  const [sessoes, setSessoes] = useState<Sessao[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessoes = async () => {
      try {
        const response = await fetch("http://localhost:3333/sessions");
        if (!response.ok) {
          throw new Error("Erro ao buscar sessões");
        }
        const data = await response.json();
        setSessoes(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSessoes();
  }, []);

  if (loading) return <p className="text-center">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">Erro: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <a
        href="/sessoes/form"
        className="text-blue-500 hover:underline mb-4 block text-center"
      >
        Ir para o formulário de sessões
      </a>

      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Sessões
      </h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-purple-600">
            <tr>
              <th className="px-6 py-3">Nome</th>
              <th className="px-6 py-3">ID do Usuário</th>
              <th className="px-6 py-3">Criado em</th>
              <th className="px-6 py-3">Atualizado em</th>
            </tr>
          </thead>
          <tbody>
            {sessoes.map((sessao) => (
              <tr
                key={sessao.id}
                className="bg-gray-50 border-b hover:bg-gray-100"
              >
                <td className="px-6 py-4 font-medium text-purple-700">
                  {sessao.nome}
                </td>
                <td className="px-6 py-4 text-purple-700">{sessao.user_id}</td>
                <td className="px-6 py-4 text-purple-700">
                  {new Date(sessao.created_at).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-purple-700">
                  {new Date(sessao.updated_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SessionsPage;
