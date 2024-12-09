"use client";

import { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";

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

      {!loading && !error && (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-white shadow-lg rounded-lg p-4"
            >
              <div>
                <h2 className="text-xl font-bold text-purple-800">{user.name}</h2>
                <p className="text-sm text-gray-600">ID: {user.id}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}