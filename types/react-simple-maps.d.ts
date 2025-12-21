declare module 'react-simple-maps' {
  import React from 'react';

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: any;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;

  export interface GeographiesProps {
    geography: string;
    children: (data: { geographies: any[] }) => React.ReactNode;
  }

  export const Geographies: React.FC<GeographiesProps>;

  export interface GeographyProps {
    key: string;
    geography: any;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }

  export const Geography: React.FC<GeographyProps>;

  export interface MarkerProps {
    key?: string;
    coordinates: [number, number];
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    children?: React.ReactNode;
  }

  export const Marker: React.FC<MarkerProps>;

  export interface LineProps {
    from: [number, number];
    to: [number, number];
    stroke?: string;
    strokeWidth?: number;
  }

  export const Line: React.FC<LineProps>;

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    children?: React.ReactNode;
  }

  export const ZoomableGroup: React.FC<ZoomableGroupProps>;
}
