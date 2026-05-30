import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || '';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business_name: '',
    website: '',
    business_description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Request failed');

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', business_name: '', website: '', business_description: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Неуспешно изпращане на заявката. Моля, опитайте отново.');
      console.error('Booking error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all text-sm';

  return (
    <section id="booking" className="bg-gray-950 border-t border-white/10">

      {/* CTA block */}
      <div className="py-32 border-b border-white/10">
        <div className="container mx-auto px-8 md:px-16 text-center">
          <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-6">Следваща стъпка</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-tight">
            Готови ли сте да{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 text-transparent bg-clip-text">
              скалирате?
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto mb-10">
            Направете запитване днес и получете безплатна консултация за вашия бизнес.
          </p>
          <a
            href="#booking-form"
            onClick={(e) => { e.preventDefault(); document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 text-sm font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            Направи запитване
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Form */}
      <div id="booking-form" className="py-24">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10">
              <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">Контакт форма</p>
              <h3 className="text-3xl font-black text-white tracking-tight">Разкажете ни за бизнеса си</h3>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10">
              {isSuccess ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                    <CheckCircle2 className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Успешно изпратено!</h3>
                  <p className="text-gray-400 text-sm">
                    Ще се свържем с вас в рамките на 24 часа.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Пълно име *
                      </label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Имейл *
                      </label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="ivan@example.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Телефон *
                      </label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+359 88 123 4567" />
                    </div>
                    <div>
                      <label htmlFor="business_name" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Бизнес *
                      </label>
                      <input type="text" id="business_name" name="business_name" required value={formData.business_name} onChange={handleChange} className={inputClass} placeholder="Моята компания" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                      Уебсайт
                    </label>
                    <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} className={inputClass} placeholder="https://example.com" />
                  </div>

                  <div>
                    <label htmlFor="business_description" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                      Опишете бизнеса си *
                    </label>
                    <textarea id="business_description" name="business_description" rows={4} required value={formData.business_description} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Какво продавате/предлагате и на кого?" />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-950 text-sm font-bold rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Изпращане...' : 'Запази среща'}
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
