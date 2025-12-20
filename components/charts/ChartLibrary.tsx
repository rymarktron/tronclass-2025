'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels
);

// Yellow, Purple, Grey color palettes
export const colorThemes = {
  bronze: [
    '#FFD700', // Gold yellow
    '#9B4789', // Dark purple
    '#7A7A7A', // Dark grey
    '#FFC72C', // Golden poppy
    '#BA55D3', // Medium orchid
    '#A9A9A9', // Dark grey
    '#FFBF00', // Amber
    '#DA70D6', // Orchid
  ],
  silver: [
    '#FFE135', // Sunshine yellow
    '#8B4789', // Dark purple
    '#B0B0B0', // Light grey
    '#FFDF00', // Golden yellow
    '#9370DB', // Medium purple
    '#808080', // Grey
    '#FFB347', // Light orange
    '#DDA0DD', // Plum
  ],
  gold: [
    '#FFA500', // Orange
    '#6B5B95', // Muted purple
    '#9B9B9B', // Medium grey
    '#FF8C00', // Dark orange
    '#8B5A8E', // Medium purple
    '#BEBEBE', // Grey
    '#FFB90F', // Dark goldenrod
    '#C8A2D0', // Light purple
  ],
  mixed: [
    '#FFD700', // Gold yellow
    '#9B4789', // Dark purple
    '#7A7A7A', // Dark grey
    '#FFC72C', // Golden poppy
    '#BA55D3', // Medium orchid
    '#A9A9A9', // Dark grey
    '#FFBF00', // Amber
    '#DA70D6', // Orchid
  ]
};

interface ChartProps {
  title?: string;
  data: any;
  options?: any;
  colorTheme?: keyof typeof colorThemes;
  height?: number;
  showTitle?: boolean;
}

// Standardized chart options
const getBaseOptions = (title?: string, showTitle: boolean = true) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          size: 12,
          family: 'Inter, system-ui, sans-serif',
        },
        color: '#374151',
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
    title: {
      display: showTitle && !!title,
      text: title,
      font: {
        size: 18,
        weight: 'bold' as const,
        family: 'Inter, system-ui, sans-serif',
      },
      color: '#1F2937',
      padding: 20,
    },
  },
});

const getPieOptions = (title?: string, showTitle: boolean = true) => ({
  ...getBaseOptions(title, showTitle),
  plugins: {
    ...getBaseOptions(title, showTitle).plugins,
    legend: {
      position: 'right' as const,
      labels: {
        font: {
          size: 12,
          family: 'Inter, system-ui, sans-serif',
        },
        color: '#374151',
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 15,
      },
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          const label = context.label || '';
          const value = context.raw;
          const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
          const percentage = Math.round((value / total) * 100);
          return `${label}: ${value} (${percentage}%)`;
        }
      }
    },
    datalabels: {
      display: true,
      color: 'white',
      font: {
        weight: 'bold' as const,
        size: 14,
      },
      formatter: (value: number, context: any) => {
        const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
        const percentage = Math.round((value / total) * 100);
        return percentage > 5 ? `${percentage}%` : ''; // Only show percentage if slice is > 5%
      }
    }
  },
});

const getBarOptions = (title?: string, showTitle: boolean = true) => ({
  ...getBaseOptions(title, showTitle),
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      ticks: {
        color: '#6B7280',
        font: {
          family: 'Inter, system-ui, sans-serif',
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#6B7280',
        font: {
          family: 'Inter, system-ui, sans-serif',
        },
      },
    },
  },
});

// Apply colors to dataset
const applyColors = (dataset: any, colorTheme: keyof typeof colorThemes) => {
  const colors = colorThemes[colorTheme];
  return {
    ...dataset,
    backgroundColor: colors,
    borderColor: colors.map(color => color.replace(')', ', 0.8)')),
    borderWidth: 2,
  };
};

// Enhanced Pie Chart Component
export const EnhancedPieChart: React.FC<ChartProps> = ({ 
  title, 
  data, 
  options, 
  colorTheme = 'mixed', 
  height = 400, 
  showTitle = true 
}) => {
  const enhancedData = {
    ...data,
    datasets: data.datasets.map((dataset: any) => applyColors(dataset, colorTheme)),
  };

  const chartOptions = {
    ...getPieOptions(title, showTitle),
    ...options,
  };

  // Calculate total respondents
  const totalRespondents = data.datasets[0].data.reduce((sum: number, value: number) => sum + value, 0);

  return (
    <div>
      <div style={{ height: `${height}px` }}>
        <Pie data={enhancedData} options={chartOptions} />
      </div>
      <div className="text-center mt-3 text-sm text-gray-600 font-medium">
        Total Respondents: {totalRespondents}
      </div>
    </div>
  );
};

// Enhanced Doughnut Chart Component
export const EnhancedDoughnutChart: React.FC<ChartProps> = ({ 
  title, 
  data, 
  options, 
  colorTheme = 'mixed', 
  height = 400, 
  showTitle = true 
}) => {
  const enhancedData = {
    ...data,
    datasets: data.datasets.map((dataset: any) => applyColors(dataset, colorTheme)),
  };

  const chartOptions = {
    ...getPieOptions(title, showTitle),
    ...options,
  };

  // Calculate total respondents
  const totalRespondents = data.datasets[0].data.reduce((sum: number, value: number) => sum + value, 0);

  return (
    <div>
      <div style={{ height: `${height}px` }}>
        <Doughnut data={enhancedData} options={chartOptions} />
      </div>
      <div className="text-center mt-3 text-sm text-gray-600 font-medium">
        Total Respondents: {totalRespondents}
      </div>
    </div>
  );
};

// Enhanced Bar Chart Component
export const EnhancedBarChart: React.FC<ChartProps> = ({ 
  title, 
  data, 
  options, 
  colorTheme = 'bronze', 
  height = 400, 
  showTitle = true 
}) => {
  const enhancedData = {
    ...data,
    datasets: data.datasets.map((dataset: any) => applyColors(dataset, colorTheme)),
  };

  const chartOptions = {
    ...getBarOptions(title, showTitle),
    ...options,
  };

  return (
    <div style={{ height: `${height}px` }}>
      <Bar data={enhancedData} options={chartOptions} />
    </div>
  );
};

// Chart Container Component
export const ChartContainer: React.FC<{
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, subtitle, children, className = '' }) => {
  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 ${className}`}>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        {subtitle && (
          <p className="text-gray-600 text-sm leading-relaxed">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
};