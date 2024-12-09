"use client";

import { useEffect, useState } from "react";
import { FiHome, FiPlusCircle } from "react-icons/fi";

interface Character {
  id: string;
  session_id: string;
  nome: string;
  classe: string;
  raca: string;
  pontos_de_vida: string;
  created_at: string;
  updated_at: string;
}

interface Session {
  id: string;
  user_id: string;
  nome: string;
  created_at: string;
  updated_at: string;
  characters: Character[];
}

export default function SessionList() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessions = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3333/sessions");
        if (!response.ok) {
          throw new Error("Erro ao buscar sessões");
        }

        const data: Session[] = await response.json();
        setSessions(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  const toggleCollapse = (id: string) => {
    setExpandedSession((prev) => (prev === id ? null : id));
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
          href="/sessoes/form"
          className="text-purple-800 flex items-center space-x-2 text-lg hover:underline"
        >
          <FiPlusCircle size={20} />
          <span>Criar Sessão</span>
        </a>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6 text-purple-900">Lista de Sessões</h1>

      {loading && <p className="text-center text-gray-600">Carregando...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <ul className="space-y-4">
          {sessions.map((session) => (
            <li
              key={session.id}
              className="bg-white shadow-lg rounded-lg p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-purple-800">{session.nome}</h2>
                  <p className="text-sm text-gray-600">
                    Criado em: {new Date(session.created_at).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => toggleCollapse(session.id)}
                  className="text-indigo-600 hover:underline"
                >
                  {expandedSession === session.id ? "Fechar" : "Detalhes"}
                </button>
              </div>

              {expandedSession === session.id && (
                <div className="mt-4 border-t border-gray-300 pt-4">
                  <h3 className="font-bold text-lg text-purple-700">Personagens:</h3>
                  {session.characters.length > 0 ? (
                    <ul className="mt-2 space-y-2">
                      {session.characters.map((character) => (
                        <li
                          key={character.id}
                          className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <table className="min-w-full text-center">
                            <thead>
                              <tr>
                                <th className="px-4 py-2 text-gray-700">Atributo</th>
                                <th className="px-4 py-2 text-gray-700">Valor</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-t px-4 py-2 text-gray-600">Nome</td>
                                <td className="border-t px-4 py-2">{character.nome}</td>
                              </tr>
                              <tr>
                                <td className="border-t px-4 py-2 text-gray-600">Classe</td>
                                <td className="border-t px-4 py-2">{character.classe}</td>
                              </tr>
                              <tr>
                                <td className="border-t px-4 py-2 text-gray-600">Raça</td>
                                <td className="border-t px-4 py-2">{character.raca}</td>
                              </tr>
                              <tr>
                                <td className="border-t px-4 py-2 text-gray-600">Pontos de Vida</td>
                                <td className="border-t px-4 py-2">{character.pontos_de_vida}</td>
                              </tr>
                            </tbody>
                          </table>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">Nenhum personagem cadastrado.</p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}