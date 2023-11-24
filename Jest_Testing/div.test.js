const div = require('./function');

test('adds 1 / 2 to equal 0.5', () => {
  expect(div(1, 2)).toBe(0.5);
});