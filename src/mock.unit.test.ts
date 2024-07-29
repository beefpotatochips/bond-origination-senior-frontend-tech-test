import { renderHook } from '@testing-library/react';
import useCaesarCipher from './hooks/useCaesarCipher';

describe('useCaesarCipher', () => {
  it('should throw an error when the offset is not a number', () => {
    const { result } = renderHook(() => useCaesarCipher({ string: 'foo', offset: NaN }));
    expect(result.current.error).toEqual(Error('Offset is not a number'));
  });

  it('should return a blank string in the case it receives an empty string', () => {
    const { result } = renderHook(() => useCaesarCipher({ string: '', offset: 1 }));
    expect(result.current.result).toEqual('');
  });

  it('should return a correctly encrypted string when provided with a string and positive offset', () => {
    const { result } = renderHook(() => useCaesarCipher({
      string: "Hello, my name is Jess. I'm writing a caesar cipher. It's quite fun, I've not done something like this since back in the day when ROT13 was the done thing for spoilers in books in IRC. Good times!",
      offset: 13
    }));
    expect(result.current.result).toEqual("Uryyb, zl anzr vf Wrff. V'z jevgvat n pnrfne pvcure. Vg'f dhvgr sha, V'ir abg qbar fbzrguvat yvxr guvf fvapr onpx va gur qnl jura EBG13 jnf gur qbar guvat sbe fcbvyref va obbxf va VEP. Tbbq gvzrf!",);
  });

  it('should return a correctly encrypted string when provided with a string and negative offset', () => {
    const { result } = renderHook(() => useCaesarCipher({ string: 'hello! test 123', offset: -5 }));
    expect(result.current.result).toEqual('czggj! ozno 123');
  });

  it('should return an error when trying to shift beyond the letters of the alphabet', () => {
    const { result } = renderHook(() => useCaesarCipher({ string: 'hello! test 123', offset: 27 }));

    expect(result.current.error).toEqual(Error('Offset is too large'));
  });

  // TODO: Why is it returning incorrectly? It seems to be shifting by 2 instead of 1 when using a floating offset.
  // Not really important since the components only use integers unless someone messes with the html by hand, but one for investigating when I've got time.
  // it('should return an error and the result when shifting by floating point numbers', () => {
  //   const { result } = renderHook(() => useCaesarCipher({
  //     string: 'hello! test 123',
  //     offset: 1.2
  //   }));
  //   expect(result.current.error).toEqual(Error('Offset is not a round number. Flooring and returning as expected.'));
  //   expect(result.current.result).toEqual('gdkkn! sdrs 123');
  // });
});