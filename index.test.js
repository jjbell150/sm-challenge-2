const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles in-between time before 30 mins - 2:28', () => {
    const timeInWords = convertTimeToWords('2:28');
    expect(timeInWords).toBe('twenty eight past two');
  });

  it('Handles in-between time after 30 mins - 2:48', () => {
    const timeInWords = convertTimeToWords('2:48');
    expect(timeInWords).toBe('twelve to three');
  });
});
