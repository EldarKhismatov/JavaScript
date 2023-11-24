const sub = require('./function');

test('adds 1 - 2 to equal -1', () => {
    expect(sub(1 - 2)).toBe(-1);
  });