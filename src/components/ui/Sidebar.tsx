import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  DollarSign,
  Briefcase,
  BookOpen,
  Dumbbell,
  ChefHat,
  X,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { useSidebar } from '../../contexts/SidebarContext';
import Button from './Button';

import { Inbox } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Finance', href: '/finance', icon: DollarSign, color: 'finance' },
  { name: 'Projects', href: '/projects', icon: Briefcase, color: 'projects' },
  { name: 'Inbox', href: '/inbox', icon: Inbox, color: 'projects' },
  { name: 'Library', href: '/library', icon: BookOpen, color: 'library' },
  { name: 'Fitness', href: '/fitness', icon: Dumbbell, color: 'fitness' },
  { name: 'Kitchen', href: '/kitchen', icon: ChefHat, color: 'kitchen' },
];

export default function Sidebar() {
  const { isOpen, close } = useSidebar();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={close}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-64 glass transition-transform duration-300 ease-in-out',
          'lg:translate-x-0 lg:static lg:z-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b border-slate-200/50 px-6">
            <h1 className="text-xl font-bold text-slate-900">Life OS Pro</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={close}
              className="lg:hidden"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    // Close sidebar on mobile when navigating
                    if (window.innerWidth < 1024) {
                      close();
                    }
                  }}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                      'hover:bg-slate-100/50',
                      isActive
                        ? (() => {
                            const colorMap: Record<string, string> = {
                              finance: 'bg-finance-50 text-finance-700 border-l-4 border-finance-600',
                              projects: 'bg-projects-50 text-projects-700 border-l-4 border-projects-600',
                              library: 'bg-library-50 text-library-700 border-l-4 border-library-600',
                              fitness: 'bg-fitness-50 text-fitness-700 border-l-4 border-fitness-600',
                              kitchen: 'bg-kitchen-50 text-kitchen-700 border-l-4 border-kitchen-600',
                            };
                            return colorMap[item.color || ''] || 'bg-slate-50 text-slate-700 border-l-4 border-slate-600';
                          })()
                        : 'text-slate-700'
                    )
                  }
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="border-t border-slate-200/50 p-4">
            <p className="text-xs text-slate-500 text-center">
              © 2024 Life OS Pro
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

