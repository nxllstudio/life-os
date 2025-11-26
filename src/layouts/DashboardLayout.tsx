import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from '../components/ui/Sidebar';
import { useSidebar } from '../contexts/SidebarContext';
import Button from '../components/ui/Button';
import FloatingActionButton from '../components/ui/FloatingActionButton';

export default function DashboardLayout() {
  const { open } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex h-16 items-center gap-4 border-b border-slate-200 bg-white px-4 lg:px-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={open}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex-1" />
          {/* Add user menu, command palette trigger, etc. here */}
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 pb-20 lg:pb-6">
          <Outlet />
        </main>
      </div>
      <FloatingActionButton />
    </div>
  );
}

