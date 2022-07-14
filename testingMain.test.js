import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './main';


test('return capitalized string', () => {
  expect(capitalize('kingBay')).toBe('KingBay');
});

test('return reversed string', () => {
  expect(reverseString('kingBay')).toBe('yaBgnik');
});

test.skip('add 2 + 5', () => {
  expect(calculator(2, 5)).toBe(7);
});
test.skip('subtract 5 - 2', () => {
  expect(calculator(5, 2)).toBe(3);
});
test.skip('divide 6 / 3', () => {
  expect(calculator(6, 3)).toBe(2);
});
test.skip('multiply 2 + 5', () => {
  expect(calculator(2, 5)).toBe(10);
});

test.skip('stg', () => {
  expect(caesarCipher('stg')).toBe('stgButIncipher');
});

test.skip('some arr with number', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe({ average: 4, min: 1, max: 8, length: 6 });
});