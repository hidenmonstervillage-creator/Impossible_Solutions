const steps = [
  {
    title: 'Запитване',
    description: 'Попълнете формата и ни разкажете за бизнеса си. Ще се свържем с вас в рамките на 24 часа за безплатна консултация.',
  },
  {
    title: 'Анализ и стратегия',
    description: 'Анализираме вашия пазар, конкуренцията и нуждите ви. Изготвяме персонализирана стратегия с ясни цели и KPI-та.',
  },
  {
    title: 'Изпълнение и резултати',
    description: 'Реализираме решението - уебсайт, автоматизация или маркетинг кампания. Следим резултатите и оптимизираме непрекъснато.',
  },
];

export default function Steps() {
  return (
    <section className="py-32 bg-gray-950 border-t border-white/10">
      <div className="container mx-auto px-8 md:px-16">
        <div className="max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Как{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
              работим
            </span>
          </h2>
          <p className="text-gray-400 text-sm">Процесът - прост и прозрачен.</p>
        </div>

        <div>
          {steps.map((step, i) => (
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
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {step.description}
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
