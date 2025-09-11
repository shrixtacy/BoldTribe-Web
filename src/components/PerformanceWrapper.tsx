import React, { memo, ReactNode } from 'react';

interface PerformanceWrapperProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
}

const PerformanceWrapper: React.FC<PerformanceWrapperProps> = memo(({ 
  children, 
  className = '',
  fallback = null 
}) => {
  return (
    <div className={className}>
      {children}
      {fallback}
    </div>
  );
});

PerformanceWrapper.displayName = 'PerformanceWrapper';

export default PerformanceWrapper;
