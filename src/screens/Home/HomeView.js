import React, { memo } from 'react';
import { SafeAreaView, View, Text, Animated } from 'react-native';
import { useAnimated } from './helper';
import s from './styles';

const HomeView = ({ item }) => {
  // const value = item?.chart?.value;

  // const { fadeEmpty, fadeChart } = useAnimated({ value });

  return (
    <SafeAreaView style={s.container}>
      <Text style={s.text}>Diagram</Text>
      {/* {value && (
        <>
          <View style={s.diagramContainer}>
            <Animated.View style={{ flex: fadeEmpty }} />
            <Animated.View style={[{ flex: fadeChart }, s.chart]} />
          </View>
          <Text style={s.text}>{value}</Text>
        </>
      )} */}
    </SafeAreaView>
  );
};

export default memo(HomeView);
