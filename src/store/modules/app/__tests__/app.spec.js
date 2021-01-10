import * as actions from '../appActions';
import reducer from '../appReducer';
import { createStore, combineReducers, Store } from 'redux';

let store = Store;
describe('testing store app ', () => {
  beforeEach(() => {
    store = createStore(combineReducers({ app: reducer }));
  });
  it('should handle `start` action correctly', () => {
    store.dispatch(actions.initialization.start());

    expect(store.getState().app.isLoading).toBe(true);
    expect(store.getState().app.error).toBeNull();
    expect(store.getState().app.isError).toBe(false);
  });

  it('should handle `success` action correctly', () => {
    store.dispatch(actions.initialization.success());

    expect(store.getState().app.isLoading).toBe(true);
    expect(store.getState().app.error).toBeNull();
    expect(store.getState().app.isError).toBe(false);
  });

  it('should handle `error` action correctly', () => {
    store.dispatch(actions.initialization.error());
    expect(store.getState().app.isLoading).toBe(false);
    expect(store.getState().app.isError).toBe(true);
  });
});
