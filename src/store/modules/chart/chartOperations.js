import { normalize } from 'normalizr';
import * as actions from './chartActions';
import { schema, ws } from '../../../Api';

export function fetchChart() {
  return async function chartThunk(dispatch) {
    try {
      dispatch(actions.chart.start());

      ws.onmessage = e => {
        const parse = JSON.parse(e.data);

        const data = {
          id: 'chart',
          ...parse,
        };

        const { entities } = normalize(data, schema.Chart);
        dispatch(actions.chart.success({ entities }));
      };
    } catch (err) {
      dispatch(actions.chart.error({ message: err.message }));
    }
  };
}
