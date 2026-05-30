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
          <div className="flex items-center">
            <div className="h-16 shrink-0">
              <img
                src="/im.png"
                alt="Impossible Solutions Logo"
                className="h-full w-auto object-contain"
              />
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
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-blue-200 to-slate-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('booking')}
              className="text-sm px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] transition-shadow"
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
