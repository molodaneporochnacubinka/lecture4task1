import getHealth from '../src/js/getHealth';

test('test getHealth 15', () => {
  const health = getHealth({ name: 'Маг', health: 15 });
  expect(health).toBe('wounded');
});

test('test getHealth 50', () => {
  const health = getHealth({ name: 'Маг', health: 50 });
  expect(health).toBe('wounded');
});

test('test getHealth 90', () => {
  const health = getHealth({ name: 'Маг', health: 90 });
  expect(health).toBe('healthy');
});

test('test getHealth 10', () => {
  const health = getHealth({ name: 'Маг', health: 10 });
  expect(health).toBe('critical');
});
