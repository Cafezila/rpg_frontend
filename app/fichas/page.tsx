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

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         // const response = await fetch("http://localhost:3333/users");
  //         if (!response.ok) {
  //           throw new Error("Erro ao buscar usuários");
  //         }
  //         // const data = await response.json();
  //         setUsers(data);
  //       } catch (err: any) {
  //         setError(err.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchUsers();
  //   }, []);

  //   if (loading) return <p className="text-center">Carregando...</p>;
  //   if (error) return <p className="text-center text-red-500">Erro: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <a href="/fichas/form" className="text-blue-500 hover:underline">
        Ir para o formulário de criação de usuário
      </a>
      <h1 className="text-2xl font-bold text-center mb-4">Usuários</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 border rounded shadow hover:bg-gray-100"
          >
            <p className="font-semibold">{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsPage;
