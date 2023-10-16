const TIME_MAP = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  20: 'twenty',
  30: 'thirty'
}

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {

  const [hours, minutes] = time.split(':');

  let prefix;
  let suffix;

  // TODO: real code goes here!
  if (hours === '0') {
    return 'midnight';
  } else if (hours === '12') {
    return 'midday';
  }

  if (minutes === '0') {
    return `${TIME_MAP[hours]} o\'clock`
  } else if (minutes === '15') {
    return `quarter past ${TIME_MAP[hours]}`;
  } else if (minutes === '30') {
    return `half past ${TIME_MAP[hours]}`;
  } else if (minutes === '45') {
    console.log(hours)
    return `quarter to ${TIME_MAP[Number(hours) + 1]}`;
  }

  if (Number(minutes) > 10) {
    firstDigit = `${minutes[0]}0`;
    secondDigit = minutes[1];

    if (Number(firstDigit) > 30) {
      return `${TIME_MAP[firstDigit]} ${TIME_MAP[secondDigit]} to ${TIME_MAP[Number(hours) + 1]}`;
    } else {
      return `${TIME_MAP[firstDigit]} ${TIME_MAP[secondDigit]} past ${TIME_MAP[Number(hours)]}`;
    }
  }
}


module.exports = { convertTimeToWords };