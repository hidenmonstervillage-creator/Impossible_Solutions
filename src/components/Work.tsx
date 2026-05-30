import { ArrowUpRight } from 'lucide-react';

const clientCategories = [
  {
    category: 'Доктори',
    clients: [
      { id: 1, name: 'Д-р Ал Шаргаби', url: 'https://dralshargabi.eu', title: 'Медицински уебсайт', image: '/picture.png' },
      { id: 2, name: 'Д-р Борисова', url: 'https://drmariyanaborisova.eu', title: 'Здравна практика', image: '/b29d1c08-b5be-43c8-94da-513915bead1d.jpeg' },
      { id: 3, name: 'Д-р Найденова', url: 'https://zubolekarpleven.eu', title: 'Медицинска практика', image: '/drnaid.png' },
    ],
  },
  {
    category: 'Клиники и медицински центрове',
    clients: [
      { id: 4, name: "Mimi's Wellmed", url: '#', title: 'Wellness център', image: "/Mimi's wellmed.png" },
    ],
  },
  {
    category: 'Автомобилни услуги',
    clients: [
      { id: 5, name: 'AutoClick', url: 'https://autoclick.pro', title: 'Автомобилни услуги', image: '/autoclick.jpg' },
      { id: 6, name: 'Auto-Boost', url: 'https://www.auto-boost.pro', title: 'Автомобилен сервиз', image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { id: 7, name: 'Пътна Помощ SK auto', url: 'https://putnapomoshtpleven.eu/', title: 'Пътна помощ', image: 'https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=800' },
    ],
  },
  {
    category: 'Други',
    clients: [
      { id: 8, name: 'Spark Vision', url: 'https://sparkvision.tech/', title: 'Технологична компания', image: '/sparkvision.png' },
      { id: 9, name: 'ProMedica24', url: 'https://www.promedica24.bg/', title: 'Здравна грижа у дома', image: '/promedica 24 logo.jpg' },
      { id: 10, name: 'Clinic Scales', url: 'https://www.clinicscales.com/', title: 'Медицинско оборудване', image: '/logo1.1.png' },
{ id: 12, name: 'Virality', url: 'https://virality.cc', title: 'Дигитален маркетинг', image: '/virality logo.jpeg' },
    ],
  },
];

export default function Work() {
  const totalClients = clientCategories.reduce((sum, c) => sum + c.clients.length, 0);

  return (
    <section id="work" className="py-32 bg-gray-950 border-t border-white/10">
      <div className="container mx-auto px-8 md:px-16">
        <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Нашата{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
              Работа
            </span>
          </h2>
          <p className="text-gray-400 text-sm">
            Доверени от {totalClients}+ клиента в различни индустрии.
          </p>
        </div>

        <div className="space-y-20">
          {clientCategories.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">
                  {category.category}
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.clients.map((client) => (
                  <a
                    key={client.id}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent" />
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {client.name}
                        </p>
                        <p className="text-xs text-gray-600 mt-0.5">{client.title}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-cyan-400 transition-colors shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
}
