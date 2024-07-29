

interface CaesarCipherResult {
  result: string;
  error: Error | null;
}

interface CaesarCipherProps {
  string: string;
  offset: number;
}

const REGEX_CAPTURE = /[a-zA-Z]/g;

function useCaesarCipher({ string, offset }: CaesarCipherProps): CaesarCipherResult {
  if (isNaN(offset)) {
    return {
      result: '',
      error: new Error('Offset is not a number')
    };
  }

  if (offset > 26 || offset < -26) {
    return {
      result: '',
      error: new Error('Offset is too large')
    };
  }



  if (string === '') {
    return {
      result: '',
      error: null
    };
  }
  const replacedString = string.replace(REGEX_CAPTURE, (char) => {
    const charCode = char.charCodeAt(0);
    let newCharCode = charCode;

    // We only want to deal with letters, punctuation & non-utf8 characters should be left as is.
    if (charCode >= 65 && charCode <= 90) { // Uppercase letters

      newCharCode = ((charCode - 65 + Math.floor(offset)) % 26) + 65;
      // add 26 if the result is negative
      if (newCharCode < 65) {
        newCharCode += 26;
      }

    } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
      newCharCode = ((charCode - 97 + Math.floor(offset)) % 26) + 97;
      // add 26 if the result is negative
      if (newCharCode < 97) {
        newCharCode += 26;
      }

    }

    return String.fromCharCode(newCharCode);
  });

  return {
    result: replacedString,
    error: offset % 1 !== 0 ? new Error('Offset is not a round number. Flooring and returning as expected.') : null
  };

}

export default useCaesarCipher;