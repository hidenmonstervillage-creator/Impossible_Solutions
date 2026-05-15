import { Menu } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/70 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-8 md:px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 shrink-0">
              <img
                src="/is logo (2).png"
                alt="Impossible Solutions Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight leading-none">
                Impossible Solutions
              </h1>
              <p className="text-xs text-cyan-400/60 mt-0.5">
                Невъзможни решения за всеки проблем.
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: 'За нас', id: 'about' },
              { label: 'Клиенти', id: 'work' },
              { label: 'Контакти', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm text-gray-400 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-cyan-400 to-magenta-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('booking')}
              className="text-sm px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-magenta-500 text-white font-semibold hover:shadow-[0_0_24px_rgba(6,182,212,0.4)] transition-shadow"
            >
              Запитване
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('booking')}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
