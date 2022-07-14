import { capitalize, reverseString, calc, caesarCipher, analyzeArray } from './main';


test('return capitalized string', () => {
  expect(capitalize('kingBay')).toBe('KingBay');
});

test('return reversed string', () => {
  expect(reverseString('kingBay')).toBe('yaBgnik');
});

test('add 2 + 5', () => {
  expect(calc.add(2, 5)).toBe(7);
});
test('subtract 5 - 2', () => {
  expect(calc.subtract(5, 2)).toBe(3);
});
test('divide 2 * 5', () => {
  expect(calc.multiply(2, 5)).toBe(10);
});
test('multiply 6 / 3', () => {
  expect(calc.divide(6, 3)).toBe(2);
});

test.skip('stg', () => {
  expect(caesarCipher('stg')).toBe('stgButIncipher');
});

test.skip('some arr with number', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe({ average: 4, min: 1, max: 8, length: 6 });
});