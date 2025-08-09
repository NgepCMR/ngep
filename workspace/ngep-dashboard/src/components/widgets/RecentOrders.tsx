import { t } from '../../i18n';
import type { Language } from '../../i18n';

const mockOrders = [
  { id: 'ORD-20250801-001', date: '2025-08-01', quantity: 600, hatchery: 'Green Farms', status: 'delivered' },
  { id: 'ORD-20250808-002', date: '2025-08-08', quantity: 800, hatchery: 'Sunrise Hatchery', status: 'scheduled' },
  { id: 'ORD-20250815-003', date: '2025-08-15', quantity: 1200, hatchery: 'Ngep Hatchery', status: 'pending' },
];

type StatusKey = 'delivered' | 'scheduled' | 'pending';

function StatusPill({ lang, status }: { lang: Language; status: StatusKey }) {
  const map: Record<StatusKey, { text: string; className: string }> = {
    delivered: { text: t(lang, 'delivered'), className: 'bg-green-50 text-green-700' },
    scheduled: { text: t(lang, 'scheduled'), className: 'bg-blue-50 text-blue-700' },
    pending: { text: t(lang, 'pending'), className: 'bg-amber-50 text-amber-700' },
  };
  const v = map[status];
  return <span className={`px-2 py-1 text-xs rounded-full ${v.className}`}>{v.text}</span>;
}

export function RecentOrders({ lang }: { lang: Language }) {
  return (
    <section className="card" aria-labelledby="orders-heading">
      <div className="flex items-center justify-between mb-3">
        <h2 id="orders-heading" className="card-title">
          {t(lang, 'recentOrders')}
        </h2>
        <button className="btn btn-secondary h-9 px-3 text-sm">{t(lang, 'viewAll')}</button>
      </div>
      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="px-2 sm:px-3 py-2 font-medium">{t(lang, 'orderId')}</th>
              <th className="px-2 sm:px-3 py-2 font-medium">{t(lang, 'date')}</th>
              <th className="px-2 sm:px-3 py-2 font-medium">{t(lang, 'quantity')}</th>
              <th className="px-2 sm:px-3 py-2 font-medium">{t(lang, 'hatchery')}</th>
              <th className="px-2 sm:px-3 py-2 font-medium">{t(lang, 'status')}</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-3 py-6 text-center text-gray-500">
                  {t(lang, 'noOrders')}
                </td>
              </tr>
            ) : (
              mockOrders.map((o) => (
                <tr key={o.id} className="border-t border-gray-100">
                  <td className="px-2 sm:px-3 py-2 font-medium text-gray-900 whitespace-nowrap">{o.id}</td>
                  <td className="px-2 sm:px-3 py-2 text-gray-700 whitespace-nowrap">
                    {new Date(o.date).toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR')}
                  </td>
                  <td className="px-2 sm:px-3 py-2 text-gray-700">{o.quantity.toLocaleString()}</td>
                  <td className="px-2 sm:px-3 py-2 text-gray-700">{o.hatchery}</td>
                  <td className="px-2 sm:px-3 py-2 text-gray-700">
                    <StatusPill lang={lang} status={o.status as StatusKey} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}