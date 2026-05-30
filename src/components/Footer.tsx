import { Phone } from 'lucide-react';

const links = [
  { label: 'За нас', id: 'about' },
  { label: 'Клиенти', id: 'work' },
  { label: 'Запитване', id: 'booking' },
  { label: 'Контакти', id: 'contact' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-950 border-t border-white/10">
      <div className="container mx-auto px-8 md:px-16 py-16">
        <div className="max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <div className="mb-4">
              <img src="/im.png" alt="Impossible Solutions" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              AI автоматизации, уебсайтове и дигитален маркетинг. Невъзможни решения за всеки възможен проблем.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-4 font-mono">Навигация</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-4 font-mono">Контакти</p>
              <a
                href="tel:+359886516012"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                +359 88 651 6012
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Impossible Solutions. Всички права запазени.
          </p>
          <p className="text-xs text-gray-600 italic">Вие мечтаете. Ние реализираме.</p>
        </div>

        </div>
      </div>
    </footer>
  );
}
