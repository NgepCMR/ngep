import type { ReactNode } from 'react';
import { LayoutDashboard, CalendarDays, ShoppingCart, Building2, Settings, ClipboardList, Bird } from 'lucide-react';
import { t } from '../i18n';
import type { Language } from '../i18n';

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({ icon, label, active }: SidebarItemProps) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 ${
        active ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      <span className="h-5 w-5" aria-hidden>
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}

interface SidebarProps {
  lang: Language;
}

export function Sidebar({ lang }: SidebarProps) {
  return (
    <aside className="hidden md:block md:w-64 bg-white border-r border-gray-200 p-3">
      <nav className="space-y-1" aria-label="Sidebar">
        <SidebarItem icon={<LayoutDashboard className="h-5 w-5" />} label={t(lang, 'dashboard')} active />
        <SidebarItem icon={<Bird className="h-5 w-5" />} label={t(lang, 'bookChicks')} />
        <SidebarItem icon={<CalendarDays className="h-5 w-5" />} label={t(lang, 'availability')} />
        <SidebarItem icon={<ClipboardList className="h-5 w-5" />} label={t(lang, 'subscriptions')} />
        <SidebarItem icon={<Building2 className="h-5 w-5" />} label={t(lang, 'hatcheries')} />
        <SidebarItem icon={<ShoppingCart className="h-5 w-5" />} label={t(lang, 'orders')} />
        <SidebarItem icon={<Settings className="h-5 w-5" />} label={t(lang, 'settings')} />
      </nav>
    </aside>
  );
}