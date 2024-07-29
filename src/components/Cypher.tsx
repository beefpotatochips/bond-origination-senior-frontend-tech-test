import React, { useState } from 'react';
import useCaesarCypher from '../hooks/useCaesarCypher';

const CaesarCipherForm: React.FC = () => {
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);
  const [isPositive, setIsPositive] = useState(true);

  const cipheredText = useCaesarCypher({string: text, offset: isPositive ? offset : -offset});

  return (
    <div>
      <form>
        <div>
          <label>
            Text:
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Offset: {offset}
            <input
              type='range'
              min={0}
              max={26}
              onChange={(e) => setOffset(parseInt(e.target.value, 10))}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              checked={isPositive}
              onChange={() => setIsPositive(true)}
            />
            Positive
          </label>
          <label>
            <input
              type="radio"
              checked={!isPositive}
              onChange={() => setIsPositive(false)}
            />
            Negative
          </label>
        </div>
      </form>
      <div>
        <h3>Preview:</h3>
        <p>{cipheredText.result}</p>
      </div>
    </div>
  );
};

export default CaesarCipherForm;