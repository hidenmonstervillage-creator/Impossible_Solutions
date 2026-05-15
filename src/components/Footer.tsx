import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gray-950 border-t border-cyan-500/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Контакти</h4>
            <div className="space-y-3">
              <a
                href="tel:+359886516012"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+359 88 651 6012</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex items-center justify-center">
          <p className="text-gray-500 text-sm text-center">
            Вие мечтаете.<br />
            Ние реализираме.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-magenta-500 to-cyan-500"></div>
    </footer>
  );
}
