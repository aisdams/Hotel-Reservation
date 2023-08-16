import React, { useEffect, useState } from 'react';
import { useNProgress } from '@tanem/react-nprogress';

type ProgressProps = {
  isAnimating: boolean;
};

const CircleProgress: React.FC<ProgressProps> = ({ isAnimating }) => {
  const { animationDuration, progress } = useNProgress({
    isAnimating,
  });

  // State to control the finished animation
  const [isFinished, setIsFinished] = useState(false);

  // Reset isFinished state after animationDuration
  useEffect(() => {
    if (isAnimating) {
      setIsFinished(false);
      const timer = setTimeout(() => {
        setIsFinished(true);
      }, animationDuration);
      return () => clearTimeout(timer);
    }
  }, [animationDuration, isAnimating]);

  const circleStyle = {
    strokeDasharray: 157, // Circumference of the circle (2 * π * radius)
    strokeDashoffset: 157 - progress * 157,
    transition: `stroke-dashoffset ${animationDuration}ms linear`,
  };

  return (
    <div
      className='pointer-events-none fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <svg
        className='w-16 h-16 animate-spin'
        viewBox='0 0 50 50'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          className='stroke-current text-blue-600'
          cx='25'
          cy='25'
          r='20'
          fill='none'
          strokeWidth='4'
          style={circleStyle}
        />
      </svg>
    </div>
  );
};

export default CircleProgress;
