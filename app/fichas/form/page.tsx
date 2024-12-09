"use client";

import { IoArrowBackCircle } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateCharacter() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    raca: "",
    classe: "",
    nivel: "",
    session_id: "",
    pontos_de_vida: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleGoBack = () => {
    router.back();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "pontos_de_vida") {
      // Apenas números permitidos
      if (!/^\d*$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Validação adicional
    if (!formData.nome || !formData.pontos_de_vida) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3333/personagem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pontos_de_vida: parseInt(formData.pontos_de_vida, 10), // Garante que seja enviado como número
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar a ficha. Tente novamente.");
      }

      setSuccess(true);
      setFormData({
        nome: "",
        raca: "",
        classe: "",
        nivel: "",
        session_id: "",
        pontos_de_vida: ""
      });

      setTimeout(() => {
        router.push("/"); // Redireciona para a página principal após sucesso
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center justify-center text-white">
      <header className="text-center mb-8 w-full flex justify-center items-center px-6">
        <button onClick={handleGoBack} className="text-white text-3xl">
          <IoArrowBackCircle />
        </button>
        <div className="w-full text-center">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Criar Nova Ficha
          </h1>
          <p className="text-xl mt-4 font-light">
            Preencha os campos abaixo para criar uma nova ficha.
          </p>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center gap-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-purple-700 px-8 py-6 rounded-lg shadow-md max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { id: "nome", label: "Nome", type: "text", placeholder: "Digite o nome" },
            { id: "raca", label: "Raça", type: "text", placeholder: "Digite a raça" },
            { id: "classe", label: "Classe", type: "text", placeholder: "Digite a classe" },
            { id: "nivel", label: "Nível", type: "number", placeholder: "Digite o nível" },
            { id: "session_id", label: "Sessao", type: "text", placeholder: "Digite a sessao" },
            {
              id: "pontos_de_vida",
              label: "Pontos de Vida",
              type: "number",
              placeholder: "Digite os pontos de vida",
            },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="mb-4">
              <label htmlFor={id} className="block text-lg font-semibold mb-2">
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder={placeholder}
                value={formData[id as keyof typeof formData]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition col-span-3"
          >
            Criar Ficha
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && (
          <p className="text-green-500 mt-4">Ficha criada com sucesso! Redirecionando...</p>
        )}
      </main>
    </div>
  );
}