import { useState } from 'react';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { AvailabilityCalendar } from './components/widgets/AvailabilityCalendar';
import { SubscriptionSummary } from './components/widgets/SubscriptionSummary';
import { RecentOrders } from './components/widgets/RecentOrders';
import { QuickActions } from './components/widgets/QuickActions';
import type { Language } from './i18n';

function App() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-full">
      <TopNav lang={lang} onToggleLang={() => setLang((l) => (l === 'en' ? 'fr' : 'en'))} />
      <div className="flex">
        <Sidebar lang={lang} />
        <main className="flex-1">
          <div className="container-responsive py-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <AvailabilityCalendar lang={lang} />
                <RecentOrders lang={lang} />
              </div>
              <div className="space-y-6">
                <SubscriptionSummary lang={lang} />
                <QuickActions lang={lang} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
