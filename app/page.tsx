export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center justify-center text-white">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">TCC RPG</h1>
        <p className="text-xl mt-4 font-light">
          Sua plataforma para mestres e jogadores de RPG de mesa.
        </p>
      </header>

      <main className="flex flex-wrap justify-center gap-6">
        <a
          href="/users"
          className="bg-white text-purple-700 px-6 py-3 rounded-lg shadow-md font-medium hover:bg-purple-100 transition"
        >
          Lista de Usuários
        </a>
        <a
          href="#features"
          className="bg-white text-purple-700 px-6 py-3 rounded-lg shadow-md font-medium hover:bg-purple-100 transition"
        >
          Fichas
        </a>
        <a
          href="#features"
          className="bg-white text-purple-700 px-6 py-3 rounded-lg shadow-md font-medium hover:bg-purple-100 transition"
        >
          Sessões
        </a>
      </main>
      <footer className="absolute bottom-4 text-center text-sm">
        <p>
          Gloriosa Evolução ❤️ <span className="font-bold">Gabriel L.</span>.
        </p>
      </footer>
    </div>
  );
}
