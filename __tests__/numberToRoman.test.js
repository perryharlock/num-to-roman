import romanNumeralGenerator from '../script.js';

describe('Number to Roman', () => {
  it("converts 1 to I", () => {
    expect(romanNumeralGenerator(1)).toBe('I');
  });
  
  it("converts 5 to V", () => {
    expect(romanNumeralGenerator(5)).toBe('V');
  });

  it("converts 10 to X", () => {
    expect(romanNumeralGenerator(10)).toBe('X');
  });

  it("converts 20 to XX", () => {
    expect(romanNumeralGenerator(20)).toBe('XX');
  });

  it("converts 3999 to MMMCMXCIX", () => {
    expect(romanNumeralGenerator(3999)).toBe('MMMCMXCIX');
  });
  
  it("warns if the number is less than 1", () => {
    expect(romanNumeralGenerator(0)).toBe('Please enter a valid number');
  });
  
  it("warns if the number is greater than 3999", () => {
    expect(romanNumeralGenerator(4000)).toBe('Please enter a valid number');
  });
  
  it("warns if the number is undefined", () => {
    expect(romanNumeralGenerator()).toBe('Please enter a valid number');
  });
});
