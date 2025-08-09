import { useId } from 'react';
import { Bell, Globe, Menu } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Switch from '@radix-ui/react-switch';
import { t } from '../i18n';
import type { Language } from '../i18n';

interface TopNavProps {
  lang: Language;
  onToggleLang: () => void;
}

export function TopNav({ lang, onToggleLang }: TopNavProps) {
  const switchId = useId();

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container-responsive h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label={t(lang, 'menu')}>
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <div aria-hidden className="h-8 w-8 rounded-md bg-blue-600 text-white grid place-items-center font-bold">PF</div>
            <span className="font-semibold text-gray-900">PFMS • {t(lang, 'appName')}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2" role="group" aria-label={t(lang, 'language')}>
            <Globe className="h-5 w-5 text-gray-500" aria-hidden />
            <label htmlFor={switchId} className="text-sm text-gray-600">
              {lang === 'en' ? t(lang, 'english') : t(lang, 'french')}
            </label>
            <Switch.Root
              id={switchId}
              checked={lang === 'fr'}
              onCheckedChange={onToggleLang}
              aria-label={t(lang, 'language')}
              className="w-10 h-6 bg-gray-200 data-[state=checked]:bg-blue-600 rounded-full relative outline-none transition-colors"
            >
              <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow transition-transform translate-x-0.5 data-[state=checked]:translate-x-4.5 will-change-transform" />
            </Switch.Root>
          </div>

          <button className="p-2 rounded-md hover:bg-gray-100" aria-label={t(lang, 'notifications')}>
            <Bell className="h-5 w-5" />
          </button>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100" aria-label={t(lang, 'profile')}>
                <div className="h-8 w-8 rounded-full bg-gray-200 grid place-items-center text-sm font-medium">AK</div>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white border border-gray-200 rounded-md shadow-soft p-1 mr-2" sideOffset={8} align="end">
              <DropdownMenu.Item className="px-3 py-2 text-sm rounded-md hover:bg-gray-50 cursor-pointer">
                {t(lang, 'profile')}
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
              <DropdownMenu.Item className="px-3 py-2 text-sm text-red-600 rounded-md hover:bg-red-50 cursor-pointer">
                {t(lang, 'signOut')}
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  );
}