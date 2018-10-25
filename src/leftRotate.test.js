import { leftRotate } from './leftRotate';

describe('leftRotate', () => {
  it('returns array roated to left by k unit place', () => {
  expect(simpleCalculator([1,2,3,4,5,6,7], 3)).toEqual([4,5,6,7,1,2,3]);
  });

  it('returns array roated to left by k unit place', () => {
  expect(simpleCalculator([1,2,3,4,5,6,7], 25)).toEqual([5,6,7,1,2,3,4]);
  });

  it('Invalid parameters', () => {
  expect(simpleCalculator("a", 3)).tothrow();
  });

  it('Invalid parameters', () => {
  expect(simpleCalculator([1,2,3,4], "@")).tothrow();
  });
});
