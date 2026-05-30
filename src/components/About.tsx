const values = [
  {
    title: 'Мисия',
    description: 'Приходи за нас. Приходи и спестено време за вас. Ние изграждаме системи, а не само уебсайтове.',
  },
  {
    title: 'Иновации',
    description: 'България изостава с около 5 години от световния пазар. Тези, които първи внедрят вече доказалите се системи, стават лидери в своята индустрия.',
  },
  {
    title: 'Доверен партньор',
    description: 'От агенции до специалисти, нашите клиенти ни вярват да доставяме съвършенство всеки път - без компромиси.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-gray-950">
      <div className="container mx-auto px-8 md:px-16">
        <div className="max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            За{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
              Нас
            </span>
          </h2>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Дигиталното присъствие вече не е достатъчно. Нуждаете се от стратегия, която доминира пазара.
          </p>
        </div>

        <div>
          {values.map((value, i) => (
            <div
              key={i}
              className="border-b border-white/10 py-10 group cursor-default"
            >
              <div className="flex gap-6 md:gap-12 items-start">
                <span className="text-xs text-gray-600 font-mono w-6 shrink-0 mt-1">
                  0{i + 1}
                </span>
                <div className="flex flex-col md:flex-row gap-4 md:gap-16 flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors md:w-52 shrink-0">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
}
