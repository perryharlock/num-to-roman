const romanNumeralGenerator = (number) => {
  if (number <=0 || number > 3999 || number === undefined) {
    return 'Please enter a valid number';
  };

  const romanNumeralObject = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = '';
  let remainingNumber = number;

  for (let romanNumeral in romanNumeralObject) {
    while (remainingNumber >= romanNumeralObject[romanNumeral]) {
      result = result + romanNumeral;
      remainingNumber = remainingNumber - romanNumeralObject[romanNumeral];
    }
  }
  return result;
};

module.exports = romanNumeralGenerator;
