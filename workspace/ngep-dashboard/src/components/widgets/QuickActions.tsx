import { t } from '../../i18n';
import type { Language } from '../../i18n';
import { Phone, PlusCircle } from 'lucide-react';

export function QuickActions({ lang }: { lang: Language }) {
  return (
    <section className="card" aria-labelledby="qa-heading">
      <h2 id="qa-heading" className="card-title mb-4">
        {t(lang, 'quickActions')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button className="btn btn-primary h-10">
          <PlusCircle className="h-5 w-5 mr-2" />
          {t(lang, 'bookNow')}
        </button>
        <button className="btn btn-secondary h-10">
          <Phone className="h-5 w-5 mr-2" />
          {t(lang, 'contactHatchery')}
        </button>
      </div>
    </section>
  );
}