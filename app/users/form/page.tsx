export default function CreateUser() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center justify-center text-white">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Criar Novo Usuário
        </h1>
        <p className="text-xl mt-4 font-light">
          Preencha os campos abaixo para criar um novo usuário.
        </p>
      </header>

      <main className="flex flex-col items-center justify-center gap-6">
        <form className="bg-white text-purple-700 px-8 py-6 rounded-lg shadow-md max-w-sm w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-semibold mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Criar Usuário
          </button>
        </form>
      </main>

      <footer className="absolute bottom-4 text-center text-sm">
        <p></p>
      </footer>
    </div>
  );
}
