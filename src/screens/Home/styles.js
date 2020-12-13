import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
  },
  diagramContainer: {
    backgroundColor: colors.white,
    height: 300,
    borderRadius: 13,
    opacity: 0.8,
  },
  chart: {
    backgroundColor: colors.chart,
    borderRadius: 13,
  },
});
