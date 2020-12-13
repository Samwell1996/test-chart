import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const getHeight = (isChart, value) => {
  const height = Math.round(value);
  if (isChart) {
    return height;
  } else {
    return 100 - height;
  }
};

export const useAnimated = ({ value }) => {
  const fadeChart = useRef(new Animated.Value(0)).current;
  const fadeEmpty = useRef(new Animated.Value(0)).current;

  const animatedChart = () => {
    Animated.timing(fadeChart, {
      toValue: getHeight(true, value),
      duration: 1100,
      useNativeDriver: false,
    }).start();
  };

  const animatedEmpty = () => {
    Animated.timing(fadeEmpty, {
      toValue: getHeight(false, value),
      duration: 1100,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animatedChart();
    animatedEmpty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return {
    fadeChart,
    fadeEmpty,
  };
};
