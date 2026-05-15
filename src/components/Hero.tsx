import { ArrowRight } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url: string }, HTMLElement>;
    }
  }
}

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <spline-viewer
          url="https://prod.spline.design/WPu1zI6hoOyq8CQh/scene.splinecode"
          className="absolute inset-0 w-full h-full"
        ></spline-viewer>
        <div className="absolute inset-0 bg-gray-950/60 md:bg-gray-950/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white mb-6 leading-tight text-center">
          Вие мечтаете.
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-magenta-500 text-transparent bg-clip-text">
            Ние реализираме.
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Направете запитване днес
        </p>

        <button
          onClick={scrollToBooking}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white text-lg font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
        >
          <span className="relative z-10">Резервирай разговор</span>
          <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-magenta-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </section>
  );
}
