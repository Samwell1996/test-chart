import React, { memo } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import s from './styles';

const HomeView = ({ item }) => {
  const value = item?.chart?.value;

  const getHeight = isChart => {
    const height = Math.round(value / 10);
    if (isChart) {
      return height;
    } else {
      return 10 - height;
    }
  };

  return (
    <View style={s.container}>
      <SafeAreaView>
        <Text style={s.text}>Diagram</Text>
        <View style={s.diagramContainer}>
          <View style={{ flex: getHeight(false) }} />
          <View style={[{ flex: getHeight(true) }, s.chart]} />
        </View>
        <Text style={s.text}>{value}</Text>
      </SafeAreaView>
    </View>
  );
};

export default memo(HomeView);
