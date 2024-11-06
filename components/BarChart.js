'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { country: 'South Korea', GDP: 7.79, BirthRate: 0.81 },
  { country: 'China', GDP: 6.9, BirthRate: 1.16 },
  { country: 'Japan', GDP: 4.26, BirthRate: 1.3 },
  { country: 'United States', GDP: 4.11, BirthRate: 1.6 },
  { country: 'Germany', GDP: 3.64, BirthRate: 1.58 },
  { country: 'United Kingdom', GDP: 3, BirthRate: 1.58 },
  { country: 'Australia', GDP: 3, BirthRate: 1.66 },
  { country: 'Italy', GDP: 2.9, BirthRate: 1.25 },
  { country: 'Spain', GDP: 2.8, BirthRate: 1.19 },
  { country: 'France', GDP: 2.24, BirthRate: 1.8 },
];

const CustomBarChart = () => {
  return (
    <div style={{ border: '2px solid black', padding: '20px' }}> {/* Outer solid border */}
      <ResponsiveContainer width="100%" height={750}>
        <BarChart layout="vertical" data={data} margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
          {/* Remove dotted lines by omitting strokeDasharray */}
          <CartesianGrid stroke="none" />
          <XAxis type="number" />
          <YAxis dataKey="country" type="category" />
          <Tooltip 
            contentStyle={{ backgroundColor: 'black', color: 'white', border: 'none' }} 
            itemStyle={({ dataKey }) => ({
              color: dataKey === 'GDP' ? '#8884d8' : '#82ca9d',  // Match GDP and BirthRate bar colors
            })}
          />
          <Legend />

          {/* GDP Bar */}
          <Bar dataKey="GDP" fill="#8884d8" name="GDP per Capita Multiplier" barSize={50}>
            <LabelList dataKey="GDP" position="right" />
          </Bar>

          {/* Birth Rate Bar */}
          <Bar dataKey="BirthRate" fill="#82ca9d" name="Birth Rate" barSize={50}>
            <LabelList dataKey="BirthRate" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;