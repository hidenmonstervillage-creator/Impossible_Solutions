import { Target, Zap, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Мисия',
    description: 'Приходи за нас. Приходи и спестено време за вас.',
  },
  {
    icon: Zap,
    title: 'Иновации',
    description: 'България винаги изостава с около 5 години от Световния пазар. Тези, които първи се възползват от това, като внедрят вече доказалите се системи, стават лидери в своята индустрия.',
  },
  {
    icon: Shield,
    title: 'Доверен партньор',
    description: 'От агенции до специалисти, нашите клиенти ни вярват да доставяме съвършенство всеки път.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            За <span className="bg-gradient-to-r from-cyan-400 to-magenta-500 text-transparent bg-clip-text">Нас</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Дигиталното присъствие вече не е достатъчно.
            <br /><br />
            Нуждаете се от стратегия, която доминира пазара. В Impossible Solutions комбинираме „хирургична" прецизност в данните с AI решения, които оптимизират всеки ваш процес. Ние не просто управляваме кампании – ние проектираме системи, които работят, докато вие мащабирате.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 border border-cyan-500/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 border border-cyan-500/30 mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
