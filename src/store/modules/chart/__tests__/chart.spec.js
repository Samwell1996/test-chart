import * as actions from '../chartActions';
import reducer from '../chartReducer';
import { createStore, combineReducers, Store } from 'redux';

let store = Store;
describe('testing store chart ', () => {
  beforeEach(() => {
    store = createStore(combineReducers({ app: reducer }));
  });
  it('should handle `start` action correctly', () => {
    store.dispatch(actions.chart.start());
    expect(store.getState().app.chart.isLoading).toBe(true);
    expect(store.getState().app.chart.error).toBeNull();
    expect(store.getState().app.chart.isError).toBe(false);
  });

  it('should handle `success` action correctly', () => {
    store.dispatch(actions.chart.success());
    expect(store.getState().app.chart.isLoading).toBe(false);
    expect(store.getState().app.chart.error).toBeNull();
    expect(store.getState().app.chart.isError).toBe(false);
  });

  it('should handle `error` action correctly', () => {
    store.dispatch(actions.chart.error());
    expect(store.getState().app.chart.isLoading).toBe(false);
    expect(store.getState().app.chart.isError).toBe(true);
  });
});
