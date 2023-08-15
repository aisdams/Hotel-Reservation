import React from 'react';
import { useNProgress } from '@tanem/react-nprogress';

type ProgressProps = {
  isAnimating: boolean;
};

const CircleProgress: React.FC<ProgressProps> = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
};

export default CircleProgress;

type ContainerProps = {
  animationDuration: number;
  children: React.ReactNode;
  isFinished: boolean;
};

const Container: React.FC<ContainerProps> = ({
  animationDuration,
  children,
  isFinished,
}) => {
  return (
    <div
      className='pointer-events-none fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  );
};

type BarProps = {
  animationDuration: number;
  progress: number;
};

const Bar: React.FC<BarProps> = ({ animationDuration, progress }) => {
  const circleStyle = {
    strokeDasharray: 157, // Circumference of the circle (2 * π * radius)
    strokeDashoffset: 157 - progress * 157,
    transition: `stroke-dashoffset ${animationDuration}ms linear`,
  };

  return (
    <svg
      className='w-16 h-16 animate-spin'
      viewBox='0 0 50 50'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        className='stroke-current text-purple-600'
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='4'
        style={circleStyle}
      />
    </svg>
  );
};
