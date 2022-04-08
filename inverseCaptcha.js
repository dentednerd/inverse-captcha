const inverseCaptcha = (sequence) => {
  const digits = Array.from(String(sequence), num => Number(num));

  const arrayOfSums = digits.reduce((array, currDigit, currIndex) => {
    const isEqualToNextNum = currDigit === digits[currIndex + 1];

    const isLastNumAndIsEqualToFirstNum = currIndex === digits.length - 1 && currDigit === digits[0];

    if (isEqualToNextNum || isLastNumAndIsEqualToFirstNum) {
      array.push(currDigit);
    }

    return array;
  }, []);

  return arrayOfSums.reduce((a, b) => a + b, 0);
}

module.exports = { inverseCaptcha };
