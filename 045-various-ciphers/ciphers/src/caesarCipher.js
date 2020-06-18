const validateInput = (message, key) => {
  if (typeof message !== 'string') {
    throw new Error('message parameter of type string is required');
  }
  if (typeof key !== 'number') {
    throw new Error('key parameter of type number is required');
  }
};

const offsetLetter = (char, offset) => {
  return String.fromCharCode(char.charCodeAt(0) + offset);
};

const encode = (message, key) => {
  validateInput(message, key);

  return [...message].map(letter => offsetLetter(letter, key)).join('');
};

const decode = (message, key) => {
  validateInput(message, key);

  return [...message].map(letter => offsetLetter(letter, -key)).join('');
};

export default {
  encode,
  decode,
};
