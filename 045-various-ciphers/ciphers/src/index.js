import caesarCipher from './caesarCipher';

const STRING_TO_ENCODE = 'Hello World!';

const encoded = caesarCipher.encode(STRING_TO_ENCODE, 5);

console.log(`${STRING_TO_ENCODE}\t=>\t${encoded}`);
console.log(`${encoded}\t=>\t${caesarCipher.decode(encoded, 5)}`);
