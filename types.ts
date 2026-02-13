
// Fix: Import React to resolve the "Cannot find namespace 'React'" error
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Tool {
  name: string;
  category: string;
  description: string;
  logo: string;
}

export interface ProductivityData {
  name: string;
  manual: number;
  aiAssisted: number;
}