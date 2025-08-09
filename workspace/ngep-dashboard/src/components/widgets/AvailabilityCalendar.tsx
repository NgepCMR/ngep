import { t } from '../../i18n';
import type { Language } from '../../i18n';

const mockAvailability = [
  { date: '2025-08-12', available: 1200 },
  { date: '2025-08-19', available: 800 },
  { date: '2025-08-26', available: 1600 },
];

export function AvailabilityCalendar({ lang }: { lang: Language }) {
  return (
    <section className="card" aria-labelledby="availability-heading">
      <div className="flex items-center justify-between mb-3">
        <h2 id="availability-heading" className="card-title">
          {t(lang, 'availabilityCalendar')}
        </h2>
        <span className="text-sm text-gray-500">{t(lang, 'deliveryDates')}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {mockAvailability.map((slot) => {
          const d = new Date(slot.date);
          const day = d.toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR', {
            day: '2-digit',
            month: 'short',
          });
          return (
            <div key={slot.date} className="rounded-lg border border-gray-200 p-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">{day}</div>
                <div className="text-xl font-semibold">{slot.available.toLocaleString()}</div>
                <div className="text-xs text-gray-500">{t(lang, 'quantity')}</div>
              </div>
              <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                {t(lang, 'availability')}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}