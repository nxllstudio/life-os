import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { SidebarProvider } from './contexts/SidebarContext';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Finance from './pages/Finance';
import Projects from './pages/Projects';
import Library from './pages/Library';
import Fitness from './pages/Fitness';
import Kitchen from './pages/Kitchen';
import Inbox from './components/modules/Inbox';

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="finance" element={<Finance />} />
            <Route path="projects" element={<Projects />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="library" element={<Library />} />
            <Route path="fitness" element={<Fitness />} />
            <Route path="kitchen" element={<Kitchen />} />
          </Route>
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#fff',
              color: '#0f172a',
              border: '1px solid #e2e8f0',
              borderRadius: '0.75rem',
            },
            success: {
              iconTheme: {
                primary: '#059669',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#dc2626',
                secondary: '#fff',
              },
            },
          }}
        />
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
