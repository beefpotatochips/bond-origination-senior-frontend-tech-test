import { renderHook } from '@testing-library/react';
import useCaesarCipher from './useCaesarCipher';

const VALID_STRING = "SPHINX OF BLACK QUARTZ, JUDGE MY VOW";
const ENCRYPTED_ROT_13 = "FCUVAK BS OYNPX DHNEGM, WHQTR ZL IBJ";
const ENCRYPTED_ROT_MINUS_5 = "NKCDIS JA WGVXF LPVMOU, EPYBZ HT QJR";
const INVALID_CHARACTER_STRING = "黑石英獅身人面像審判我的誓言 🤖🤖🤖"

describe('useCaesarCipher', () => {
  it('should throw an error when the offset is not a number', () => {
    const { result } = renderHook(() => useCaesarCipher({ string: 'foo', offset: NaN }));
    expect(result.current.error).toEqual(Error('Offset is not a number'));
    expect(result.current.result).toEqual('');
  });

  it('should return a blank string in the case it receives an empty string', () => {
    const { result } = renderHook(() => useCaesarCipher({ string: '', offset: 1 }));
    expect(result.current.result).toEqual('');
  });

  it('should ignore emojis and special characters', () => {
    const { result } = renderHook(() => useCaesarCipher({ string: INVALID_CHARACTER_STRING, offset: 1 }));
    expect(result.current.result).toEqual(INVALID_CHARACTER_STRING);
  });

  it('should ignore emojis and special characters while encrypting regular text', () => {
    const { result } = renderHook(() => useCaesarCipher({ string: `${INVALID_CHARACTER_STRING} hello! test 123`, offset: 1 }));
    expect(result.current.result).toEqual(`${INVALID_CHARACTER_STRING} ifmmp! uftu 123`);
  });

  it('should return a correctly encrypted string when provided with a string and positive offset', () => {
    const { result } = renderHook(() => useCaesarCipher({
      string: VALID_STRING,
      offset: 13
    }));
    expect(result.current.result).toEqual(ENCRYPTED_ROT_13,);
  });

  it('should return a correctly encrypted string when provided with a string and negative offset', () => {
    const { result } = renderHook(() => useCaesarCipher({ string: VALID_STRING, offset: -5 }));
    expect(result.current.result).toEqual(ENCRYPTED_ROT_MINUS_5);
  });

  it('should return an error when trying to shift beyond the letters of the alphabet', () => {
    const { result } = renderHook(() => useCaesarCipher({ string: VALID_STRING, offset: 27 }));

    expect(result.current.error).toEqual(Error('Offset is too large'));
  });


  it('should return an error and the result when shifting by floating point numbers', () => {
    const { result } = renderHook(() => useCaesarCipher({
      string: 'hELLo! test 123',
      offset: 1.2
    }));
    expect(result.current.error).toEqual(Error('Offset is not a round number. Flooring and returning as expected.'));
    expect(result.current.result).toEqual('iFMMp! uftu 123');
  });
});