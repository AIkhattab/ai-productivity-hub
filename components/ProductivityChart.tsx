
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';
import { ProductivityData } from '../types';

const data: ProductivityData[] = [
  { name: 'Wireframing', manual: 12, aiAssisted: 2 },
  { name: 'Coding', manual: 40, aiAssisted: 14 },
  { name: 'Testing', manual: 20, aiAssisted: 5 },
  { name: 'Documentation', manual: 15, aiAssisted: 3 },
  { name: 'Deployment', manual: 8, aiAssisted: 4 },
];

export const ProductivityChart: React.FC = () => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#065f46" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#34d399', opacity: 0.6, fontSize: 12 }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#34d399', opacity: 0.6, fontSize: 12 }}
            label={{ value: 'Hours', angle: -90, position: 'insideLeft', fill: '#34d399', opacity: 0.6 }}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(16, 185, 129, 0.05)' }}
            contentStyle={{ 
              backgroundColor: '#022c22', 
              border: '1px solid #065f46',
              borderRadius: '12px',
              color: '#ecfdf5' 
            }}
          />
          <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: '20px' }} />
          <Bar name="Manual Effort" dataKey="manual" fill="#064e3b" radius={[4, 4, 0, 0]} />
          <Bar name="AI Assisted" dataKey="aiAssisted" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
