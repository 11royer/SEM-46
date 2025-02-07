import React from 'react';

export interface IProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  onClick?: () => void;
}
