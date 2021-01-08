const WebSocket = require('ws');

describe('ws testing', () => {
  it('connect websocket response', () => {
    const ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = e => {
      const parse = JSON.parse(e.data);
      expect(parse.value).toBeLessThanOrEqual(100);
    };
    ws.close();
  });
});
