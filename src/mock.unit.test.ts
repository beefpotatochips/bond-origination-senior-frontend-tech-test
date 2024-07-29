import { renderHook } from '@testing-library/react';
import useCaesarCypher from './hooks/useCaesarCypher';

describe('useCaesarCypher', () => {
  it('should throw an error when the offset is not a number', () => {
    const { result } = renderHook(() => useCaesarCypher({ string: 'foo', offset: NaN }));
    expect(result.current.error).toEqual(Error('Offset is not a number'));
  });

  it('should return a blank string in the case it receives an empty string', () => {
    const { result } = renderHook(() => useCaesarCypher({ string: '', offset: 1 }));
    expect(result.current.result).toEqual('');
  });

  it('should return a correctly encrypted string when provided with a string and positive offset', () => {
    const { result } = renderHook(() => useCaesarCypher({ string: 'foo', offset: 1 }));
    expect(result.current.result).toEqual('gpp');
  });

  it('should return a correctly encrypted string when provided with a string and negative offset', () => {
    const { result } = renderHook(() => useCaesarCypher({ string: 'foo', offset: -1 }));
    expect(result.current.result).toEqual('enn');
  });
});