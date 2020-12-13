import { handleActions } from '@letapp/redux-actions';
import * as actions from './chartActions';

const INITIAL_STATE = {
  chart: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.chart.start]: state => ({
      ...state,
      chart: {
        ...state.chart,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.chart.success]: state => ({
      ...state,
      chart: {
        ...state.chart,
        isLoading: false,
      },
    }),
    [actions.chart.error]: (state, action) => ({
      ...state,
      chart: {
        ...state.chart,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
