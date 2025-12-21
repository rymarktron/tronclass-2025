'use client';

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

interface CountryData {
  name: string;
  count: number;
  lat: number;
  lng: number;
}

interface BirthCountryMapProps {
  countries: CountryData[];
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const BirthCountryMap: React.FC<BirthCountryMapProps> = ({ countries }) => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const maxCount = Math.max(...countries.map(c => c.count));

  return (
    <div className="w-full space-y-4">
      <div className="w-full bg-blue-50 rounded-lg overflow-hidden border border-blue-200">
        <ComposableMap projection="geoMercator">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#e5e7eb',
                      stroke: '#9ca3af',
                      strokeWidth: 0.75,
                      outline: 'none',
                      transition: 'all 250ms',
                    },
                    hover: {
                      fill: '#d1d5db',
                      stroke: '#6b7280',
                      strokeWidth: 0.75,
                      outline: 'none',
                      cursor: 'pointer',
                      transition: 'all 250ms',
                    },
                    pressed: {
                      fill: '#9ca3af',
                      stroke: '#6b7280',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Plot country markers */}
          {countries.map((country) => {
            const size = (country.count / maxCount) * 30 + 8;
            const opacity = 0.6 + (country.count / maxCount) * 0.4;
            const isHovered = hoveredCountry === country.name;

            return (
              <Marker
                key={country.name}
                coordinates={[country.lng, country.lat]}
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <circle
                  cx={0}
                  cy={0}
                  r={size}
                  fill="#8B4789"
                  opacity={isHovered ? 1 : opacity}
                  stroke="#4D1653"
                  strokeWidth={isHovered ? 2 : 1}
                  style={{ cursor: 'pointer', transition: 'all 200ms' }}
                />
                {isHovered && (
                  <text
                    y={-size - 10}
                    textAnchor="middle"
                    style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      fill: '#1f2937',
                      pointerEvents: 'none',
                    }}
                  >
                    {country.name}: {country.count}
                  </text>
                )}
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      {/* Country Legend */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        {countries
          .sort((a, b) => b.count - a.count)
          .map((country) => (
            <div
              key={country.name}
              onMouseEnter={() => setHoveredCountry(country.name)}
              onMouseLeave={() => setHoveredCountry(null)}
              className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                hoveredCountry === country.name
                  ? 'bg-purple-100'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: '#8B4789',
                  opacity: 0.6 + (country.count / maxCount) * 0.4,
                }}
              />
              <span className="flex-1 text-gray-700">
                <strong>{country.name}:</strong> {country.count}
              </span>
            </div>
          ))}
      </div>

      <div className="text-xs text-gray-600 bg-blue-50 p-2 rounded border border-blue-200">
        <p className="font-semibold">Hover over circles to highlight • Circle size represents student count</p>
      </div>
    </div>
  );
};

export default BirthCountryMap;
