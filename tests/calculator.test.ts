import { add } from '../src/calculator';

describe('String Calculator', () => {
  test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
  });

  test('should return the sum of two numbers separated by a comma', () => {
    expect(add("1,5")).toBe(6);
  });
});
