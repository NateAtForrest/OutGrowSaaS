import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { LayoutDashboard, Target, Users, BarChart3, Settings, BrainCircuit } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/campaigns', icon: Target, label: 'Campaigns' },
    { path: '/leads', icon: Users, label: 'Leads' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/ai-insights', icon: BrainCircuit, label: 'AI Insights' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white p-4">
      <div className="flex items-center gap-3 mb-8 px-2">
        <BrainCircuit className="w-8 h-8 text-blue-400" />
        <span className="text-xl font-bold">DemandAI</span>
      </div>
      
      <div className="space-y-2">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive(path)
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}