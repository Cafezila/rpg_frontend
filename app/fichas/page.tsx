"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  password: string;
}

const CardsPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3333/fichas");
        if (!response.ok) {
          throw new Error("Erro ao buscar usuários");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">Erro: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <a
        href="/fichas/form"
        className="text-blue-500 hover:underline mb-4 block text-center"
      >
        Ir para o formulário de fichas
      </a>

      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Fichas de Personagens
      </h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-purple-600">
            <tr>
              <th className="px-6 py-3">Nome</th>
              <th className="px-6 py-3">Senha</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-gray-50 border-b hover:bg-gray-100"
              >
                <td className="px-6 py-4 font-medium text-purple-700">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-purple-700">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardsPage;
