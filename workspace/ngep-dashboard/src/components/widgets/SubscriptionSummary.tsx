import { t } from '../../i18n';
import type { Language } from '../../i18n';

const mockSummary = {
  activePlans: 2,
  chicksPerMonth: 2400,
  nextDelivery: '2025-08-12',
};

export function SubscriptionSummary({ lang }: { lang: Language }) {
  const next = new Date(mockSummary.nextDelivery).toLocaleDateString(
    lang === 'en' ? 'en-GB' : 'fr-FR',
    { weekday: 'short', day: '2-digit', month: 'short' }
  );

  return (
    <section className="card" aria-labelledby="subs-heading">
      <h2 id="subs-heading" className="card-title mb-4">
        {t(lang, 'subscriptionSummary')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-500">{t(lang, 'activePlans')}</div>
          <div className="text-2xl font-semibold">{mockSummary.activePlans}</div>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-500">{t(lang, 'chicksPerMonth')}</div>
          <div className="text-2xl font-semibold">{mockSummary.chicksPerMonth.toLocaleString()}</div>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-500">{t(lang, 'nextDelivery')}</div>
          <div className="text-2xl font-semibold">{next}</div>
        </div>
      </div>
    </section>
  );
}