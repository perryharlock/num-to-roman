import romanNumeralGenerator from '../script.js';

describe('Number to Roman', () => {
  it('converts 1 to I', () => {
    expect(romanNumeralGenerator(1)).toBe('I');
  });

  it('converts 4 to IV', () => {
    expect(romanNumeralGenerator(4)).toBe('IV');
  });

  it('converts 5 to V', () => {
    expect(romanNumeralGenerator(5)).toBe('V');
  });

  it('converts 9 to IX', () => {
    expect(romanNumeralGenerator(9)).toBe('IX');
  });

  it('converts 10 to X', () => {
    expect(romanNumeralGenerator(10)).toBe('X');
  });

  it('converts 20 to XX', () => {
    expect(romanNumeralGenerator(20)).toBe('XX');
  });

  it('converts 40 to XL', () => {
    expect(romanNumeralGenerator(40)).toBe('XL');
  });

  it('converts 90 to XC', () => {
    expect(romanNumeralGenerator(90)).toBe('XC');
  });

  it('converts 400 to CD', () => {
    expect(romanNumeralGenerator(400)).toBe('CD');
  });

  it('converts 900 to CM', () => {
    expect(romanNumeralGenerator(900)).toBe('CM');
  });

  it('converts 3999 to MMMCMXCIX', () => {
    expect(romanNumeralGenerator(3999)).toBe('MMMCMXCIX');
  });

  it('warns if the number is less than 1', () => {
    expect(romanNumeralGenerator(0)).toBe('Please enter a valid number');
  });

  it('warns if the number is greater than 3999', () => {
    expect(romanNumeralGenerator(4000)).toBe('Please enter a valid number');
  });

  it('warns if the number is undefined', () => {
    expect(romanNumeralGenerator()).toBe('Please enter a valid number');
  });
});
