const { inverseCaptcha } = require('../inverseCaptcha');

describe('inverseCaptcha', () => {
  test('finds the sum of all digits that match the next digit in the list', () => {
    expect(inverseCaptcha(1122)).toEqual(3);
    expect(inverseCaptcha(1111)).toEqual(4);
    expect(inverseCaptcha(1234)).toEqual(0);
    expect(inverseCaptcha(91212129)).toEqual(9);
  });
});
