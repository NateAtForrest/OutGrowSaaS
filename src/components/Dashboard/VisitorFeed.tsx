import React from 'react';
import { Building2, Globe, Clock, TrendingUp } from 'lucide-react';
import type { Visitor } from '../../types';

const mockVisitors: Visitor[] = [
  {
    id: '1',
    company: 'Tech Corp',
    location: 'San Francisco, US',
    pages: ['/pricing', '/enterprise', '/demo'],
    duration: 340,
    timestamp: new Date(),
    score: 85
  },
  {
    id: '2',
    company: 'Global Systems',
    location: 'London, UK',
    pages: ['/features', '/case-studies'],
    duration: 180,
    timestamp: new Date(),
    score: 72
  }
];

const VisitorFeed = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Live Visitor Feed</h2>
      <div className="space-y-4">
        {mockVisitors.map((visitor) => (
          <div
            key={visitor.id}
            className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">{visitor.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Globe className="w-4 h-4" />
                  <span>{visitor.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{Math.floor(visitor.duration / 60)}m {visitor.duration % 60}s</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">{visitor.score}%</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex gap-2">
                {visitor.pages.map((page, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                  >
                    {page}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorFeed;