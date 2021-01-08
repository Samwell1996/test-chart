import { getHeight } from '../helper';

test('helper/getHeight', () => {
  let value = 40;

  const firstContainer = getHeight(true, value);
  const secondContainer = getHeight(false, value);
  expect(firstContainer + secondContainer).toBe(100);
});
