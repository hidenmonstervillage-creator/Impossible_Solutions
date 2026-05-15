import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '12+', label: 'Активни клиента' },
  { value: '3+', label: 'Години опит' },
  { value: '100%', label: 'Фокус върху резултатите' },
];

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 container mx-auto px-8 md:px-16 flex-1 flex flex-col justify-center py-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Дигитална агенция · Приемаме нови клиенти
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black text-white leading-[1] tracking-tight mb-8">
            Вие мечтаете.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 text-transparent bg-clip-text">
              Ние реализираме.
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-500 max-w-lg mb-10 leading-relaxed">
            AI автоматизации, уебсайтове и дигитален маркетинг - системи, които работят, докато вие мащабирате.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToBooking}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 text-sm font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Направи запитване
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white text-sm font-medium rounded-full hover:border-white/40 transition-colors"
            >
              Вижте клиентите ни
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-gray-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 first:pl-0 last:pr-0">
                <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
