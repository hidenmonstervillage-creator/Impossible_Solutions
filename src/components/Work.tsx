import { ExternalLink } from 'lucide-react';

const clientCategories = [
  {
    category: 'Доктори',
    clients: [
      {
        id: 1,
        name: 'Д-р Ал Шаргаби',
        url: 'https://dralshargabi.eu',
        title: 'Професионален медицински уебсайт',
        description: '',
        image: '/picture.png',
      },
      {
        id: 2,
        name: 'Д-р Борисова',
        url: 'https://drmariyanaborisova.eu',
        title: 'Платформа за здравна практика',
        description: '',
        image: '/b29d1c08-b5be-43c8-94da-513915bead1d.jpeg',
      },
      {
        id: 3,
        name: 'Д-р Найденова',
        url: 'https://zubolekarpleven.eu',
        title: 'Уебсайт за медицинска практика',
        description: '',
        image: '/drnaid.png',
      },
    ],
  },
  {
    category: 'Клиники и медицински центрове',
    clients: [
      {
        id: 4,
        name: "Mimi's Wellmed",
        url: '#',
        title: 'Платформа за wellness център',
        description: '',
        image: "/Mimi's wellmed.png",
      },
    ],
  },
  {
    category: 'Автомобилни услуги',
    clients: [
      {
        id: 5,
        name: 'AutoClick',
        url: 'https://autoclick.pro',
        title: 'Платформа за автомобилни услуги',
        description: '',
        image: '/autoclick.jpg',
      },
      {
        id: 6,
        name: 'Auto-Boost',
        url: 'https://www.auto-boost.pro',
        title: 'Автомобилна сервизна платформа',
        description: '',
        image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: 7,
        name: 'Пътна Помощ SK auto',
        url: 'https://putnapomoshtpleven.eu/',
        title: 'Услуги за пътна помощ',
        description: '',
        image: 'https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
  {
    category: 'Други',
    clients: [
      {
        id: 8,
        name: 'Spark Vision',
        url: 'https://sparkvision.tech/',
        title: 'Технологична компания',
        description: '',
        image: '/sparkvision.png',
      },
      {
        id: 9,
        name: 'ProMedica24',
        url: 'https://www.promedica24.bg/',
        title: 'Здравна грижа у дома',
        description: '',
        image: '/promedica 24 logo.jpg',
      },
      {
        id: 10,
        name: 'Clinic Scales',
        url: 'https://www.clinicscales.com/',
        title: 'Медицинско оборудване',
        description: '',
        image: '/logo1.1.png',
      },
      {
        id: 11,
        name: 'In Baddies We Trust',
        url: 'https://inbaddieswetrust.pro/',
        title: 'Бизнес платформа',
        description: '',
        image: '/ibwt logo.png',
      },
      {
        id: 12,
        name: 'Virality',
        url: 'https://virality.cc',
        title: 'Дигитален маркетинг',
        description: '',
        image: '/virality logo.jpeg',
      },
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Нашата <span className="bg-gradient-to-r from-cyan-400 to-magenta-500 text-transparent bg-clip-text">Работа</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Доверени от професионалисти в различни индустрии
          </p>
        </div>

        <div className="space-y-16">
          {clientCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.clients.map((client) => (
                  <a
                    key={client.id}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={client.image}
                        alt={client.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    </div>

                    <div className="relative p-6">
                      <div className="flex items-start justify-between mb-2">
                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {client.name}
                      </h4>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
