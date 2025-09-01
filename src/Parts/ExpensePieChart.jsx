import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Consistent theme colors
const CATEGORY_COLORS = {
  Food: "#EC4899", // Pink-500
  Transport: "#3B82F6", // Blue-500
  Entertainment: "#A855F7", // Purple-500
  Utilities: "#F59E0B", // Amber-500
  Health: "#22C55E", // Green-500
  Shopping: "#F97316", // Orange-500
  Other: "#64748B", // Slate-500
};

const ExpensePieChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-gray-500 bg-white p-6 rounded-xl shadow-md">
        No expense data to display 📉
      </div>
    );
  }

  const getColor = (name) => CATEGORY_COLORS[name] || "#8E9196";

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0].payload;
      const total = data.reduce((sum, item) => sum + item.value, 0);
      const percentage = ((value / total) * 100).toFixed(1);

      return (
        <div className="bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-gray-700">
            <span className="font-bold">₹{value.toFixed(2)}</span>
            <span className="ml-2 text-sm text-gray-500">({percentage}%)</span>
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom legend to add color dots
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="flex flex-wrap justify-center gap-4 mt-4">
        {payload.map((entry, index) => (
          <li key={`legend-${index}`} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm font-medium text-gray-700">
              {entry.value}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        📊 Expense Breakdown
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={90}
            dataKey="value"
            animationDuration={900}
            animationBegin={0}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={renderLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensePieChart;
