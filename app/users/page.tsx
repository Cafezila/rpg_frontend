"use client";

import { useEffect, useState } from "react";
import { FiHome, FiTrash } from "react-icons/fi";

interface User {
  id: number;
  name: string;
  password: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3333/users");
        if (!response.ok) {
          throw new Error("Erro ao buscar usuários");
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir este usuário?")) return;

    try {
      const response = await fetch(`http://localhost:3333/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir usuário");
      }

      setUsers(users.filter((user) => user.id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  };

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
          href="/users/form"
          className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700 transition"
        >
          Criar Usuário
        </a>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6 text-purple-900">Lista de Usuários</h1>

      {loading && <p className="text-center text-gray-600">Carregando...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && users.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="text-left px-4 py-3 text-lg font-bold">ID</th>
                <th className="text-left px-4 py-3 text-lg font-bold">Nome</th>
                <th className="text-left px-4 py-3 text-lg font-bold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b last:border-0 hover:bg-purple-50 transition"
                >
                  <td className="px-4 py-3 text-gray-700">{user.id}</td>
                  <td className="px-4 py-3 text-gray-700">{user.name}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <FiTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && !error && users.length === 0 && (
        <p className="text-center text-gray-600">Nenhum usuário encontrado.</p>
      )}
    </div>
  );
}