import { ArrowRight } from 'lucide-react';
import HeroScene from './HeroScene';

const stats = [
  { value: '12+', label: 'Активни клиента' },
  { value: '3+',  label: 'Години опит' },
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

      {/* Background */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_40%,rgba(34,211,238,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(139,92,246,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] opacity-50 lg:opacity-100 pointer-events-none">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-16 flex-1 flex flex-col justify-center py-20">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-10 backdrop-blur-sm tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Дигитална агенция · Приемаме нови клиенти
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-200 font-black text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Вие мечтаете.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
              Ние реализираме.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-300 text-base md:text-lg text-gray-400 max-w-md mb-10 leading-relaxed font-medium">
            AI автоматизации, уебсайтове и дигитален маркетинг — системи, които работят, докато вие мащабирате.
          </p>

          {/* Buttons */}
          <div className="animate-fade-in-up delay-500 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToBooking}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-950 text-sm font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-[0_0_32px_rgba(255,255,255,0.15)]"
            >
              Направи запитване
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-semibold rounded-full hover:border-white/50 hover:bg-white/5 transition-all"
            >
              Вижте клиентите ни
            </button>
          </div>

        </div>
      </div>

      {/* Stats bar */}
      <div className="animate-fade-in-up delay-700 relative z-10 border-t border-white/10 bg-gray-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 first:pl-0 last:pr-0">
                <div className="text-3xl md:text-4xl font-black text-white tracking-tight">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
