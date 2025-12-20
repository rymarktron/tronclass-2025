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

// Bronze, Silver, Gold color palettes
export const colorThemes = {
  bronze: [
    '#CD7F32', // Bronze
    '#B8860B', // Dark goldenrod
    '#DAA520', // Goldenrod
    '#D2B48C', // Tan
    '#F4A460', // Sandy brown
    '#DEB887', // Burlywood
    '#BC9A6A', // Light bronze
    '#A0522D', // Sienna
  ],
  silver: [
    '#C0C0C0', // Silver
    '#A9A9A9', // Dark gray
    '#D3D3D3', // Light gray
    '#708090', // Slate gray
    '#B0B0B0', // Light silver
    '#8C8C8C', // Medium gray
    '#DCDCDC', // Gainsboro
    '#696969', // Dim gray
  ],
  gold: [
    '#FFD700', // Gold
    '#FFA500', // Orange
    '#FF8C00', // Dark orange
    '#FFDF00', // Golden yellow
    '#FFBF00', // Amber
    '#FFB347', // Light orange
    '#FFC72C', // Golden poppy
    '#FFAA00', // Orange peel
  ],
  mixed: [
    '#CD7F32', // Bronze
    '#C0C0C0', // Silver  
    '#FFD700', // Gold
    '#B8860B', // Dark bronze
    '#A9A9A9', // Dark silver
    '#FFA500', // Orange gold
    '#BC9A6A', // Light bronze
    '#D3D3D3', // Light silver
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