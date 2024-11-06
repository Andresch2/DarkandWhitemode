import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-mantis-50 dark:bg-mantis-900 transition-all">
      <header className="mb-8 text-center">
        <h1 className="text-6xl font-extrabold text-mantis-600 dark:text-mantis-200">
          Bienvenido a Mi Sitio Web
        </h1>
        <p className="mt-4 text-lg text-mantis-700 dark:text-mantis-300">
          Explora la magia de Navegar en la web
        </p>
      </header>
      <section className="flex items-center justify-center gap-x-6">
        <button className="px-4 py-2 text-white transition duration-300 bg-mantis-500 rounded-lg hover:bg-mantis-600 dark:bg-mantis-400 dark:hover:bg-mantis-500">
          Comenzar
        </button>
        <ThemeSwitch />
      </section>
    </main>
  );
}
