import React from 'react';
import { Lightbulb, TrendingUp, Target, Users } from 'lucide-react';
import type { AIRecommendation } from '../../types';

const mockRecommendations: AIRecommendation[] = [
  {
    id: '1',
    type: 'campaign',
    priority: 'high',
    message: 'Increase budget allocation for Campaign A due to 40% higher conversion rate',
    impact: 85,
    action: 'Adjust Budget'
  },
  {
    id: '2',
    type: 'content',
    priority: 'medium',
    message: 'Your whitepaper "AI in Enterprise" is performing 25% above average',
    impact: 65,
    action: 'Create Similar'
  },
  {
    id: '3',
    type: 'audience',
    priority: 'high',
    message: 'New high-value segment detected in Financial Services sector',
    impact: 78,
    action: 'View Segment'
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'campaign':
      return Target;
    case 'content':
      return Lightbulb;
    default:
      return Users;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'text-red-600 bg-red-50';
    case 'medium':
      return 'text-yellow-600 bg-yellow-50';
    default:
      return 'text-green-600 bg-green-50';
  }
};

const AIRecommendations = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">AI Recommendations</h2>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Impact Score</span>
          <TrendingUp className="w-4 h-4 text-blue-600" />
        </div>
      </div>
      
      <div className="space-y-4">
        {mockRecommendations.map((rec) => {
          const Icon = getIcon(rec.type);
          const priorityColor = getPriorityColor(rec.priority);
          
          return (
            <div
              key={rec.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${priorityColor}`}>
                      {rec.priority.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500">
                      Impact Score: {rec.impact}
                    </span>
                  </div>
                  <p className="text-gray-800 mb-3">{rec.message}</p>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    {rec.action} →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIRecommendations;