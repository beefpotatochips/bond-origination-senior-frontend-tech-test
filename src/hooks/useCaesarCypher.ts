

interface CaesarCypherResult {
  result: string;
  error: string | null;
}

interface CaesarCypherProps {
  string: string;
  offset: number;
}

function useCaesarCypher({ string, offset }: CaesarCypherProps): CaesarCypherResult {
  string.toLowerCase();
  offset.toFixed(0);

  return {
    result: '',
    error: ''
  };
}

export default useCaesarCypher;