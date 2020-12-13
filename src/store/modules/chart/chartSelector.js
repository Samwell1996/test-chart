import { createSelector } from 'reselect';

const getChartEntities = state => state.entities.chart;

export const getChart = createSelector(
  state => getChartEntities(state),
  item => item,
);
