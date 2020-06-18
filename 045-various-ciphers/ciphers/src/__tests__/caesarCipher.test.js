import caesarCipher from '../caesarCipher';

describe('Caesar Cipher', () => {
  const { encode, decode } = caesarCipher;

  describe('encode', () => {
    it('throws an error if not given a string message and a number key', () => {
      expect(() => encode()).toThrow();
      expect(() => encode('hello')).toThrow();
      expect(() => encode(17, 3)).toThrow();
      expect(() => encode('hello', 'hello')).toThrow();
    });

    it.each`
      message          | offset | expected
      ${'a'}           | ${0}   | ${'a'}
      ${'b'}           | ${0}   | ${'b'}
      ${'a'}           | ${1}   | ${'b'}
      ${'z'}           | ${1}   | ${'{'}
      ${'ab'}          | ${1}   | ${'bc'}
      ${'hello world'} | ${1}   | ${'ifmmp!xpsme'}
    `(
      'correctly encodes message "$message" with offset $offset as "$expected"',
      ({ message, offset, expected }) => {
        expect(encode(message, offset)).toBe(expected);
      }
    );
  });

  describe('decode', () => {
    it('throws an error if not given a string message and a number key', () => {
      expect(() => decode()).toThrow();
      expect(() => decode('hello')).toThrow();
      expect(() => decode(17, 3)).toThrow();
      expect(() => decode('hello', 'hello')).toThrow();
    });

    it.each`
      message          | offset | expected
      ${'a'}           | ${0}   | ${'a'}
      ${'b'}           | ${0}   | ${'b'}
      ${'b'}           | ${1}   | ${'a'}
      ${'{'}           | ${1}   | ${'z'}
      ${'bc'}          | ${1}   | ${'ab'}
      ${'ifmmp!xpsme'} | ${1}   | ${'hello world'}
    `(
      'correctly encodes message "$message" with offset $offset as "$expected"',
      ({ message, offset, expected }) => {
        expect(decode(message, offset)).toBe(expected);
      }
    );
  });
});
