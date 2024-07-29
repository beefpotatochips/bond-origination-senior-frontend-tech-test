

interface CaesarCypherResult {
  result: string;
  error: Error | null;
}

interface CaesarCypherProps {
  string: string;
  offset: number;
}

const REGEX_CAPTURE = /[a-zA-Z]/g;

function useCaesarCypher({ string, offset }: CaesarCypherProps): CaesarCypherResult {
  if (isNaN(offset)) {
    return {
      result: '',
      error: new Error('Offset is not a number')
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
      newCharCode = ((charCode - 65 + offset) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
      newCharCode = ((charCode - 97 + offset) % 26) + 97;
    }

    return String.fromCharCode(newCharCode);
  });


  return {
    result: replacedString,
    error: null
  };
}

export default useCaesarCypher;