import React, { memo } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { getHeight } from './helper';
import s from './styles';

const HomeView = ({ item }) => {
  const value = item?.chart?.value;

  return (
    <View style={s.container}>
      <SafeAreaView>
        <Text style={s.text}>Diagram</Text>
        {value && (
          <>
            <View style={s.diagramContainer}>
              <View style={{ flex: getHeight(false, value) }} />
              <View style={[{ flex: getHeight(true, value) }, s.chart]} />
            </View>
            <Text style={s.text}>{value}</Text>
          </>
        )}
      </SafeAreaView>
    </View>
  );
};

export default memo(HomeView);
