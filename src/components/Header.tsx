export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <img
                src="/is logo (2).png"
                alt="Impossible Solutions Logo"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Impossible Solutions</h1>
              <p className="text-xs text-cyan-400">Невъзможни решения за всеки възможен проблем.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              За нас
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Клиенти
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Направи запитване
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Контакти
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
