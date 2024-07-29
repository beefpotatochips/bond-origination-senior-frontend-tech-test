import './Cipher.css';

import React, { useState } from 'react';
import useCaesarCipher from '../hooks/useCaesarCipher';

const CaesarCipherForm: React.FC = () => {
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(1);
  const [isPositive, setIsPositive] = useState(true);

  const cipheredText = useCaesarCipher({string: text, offset: isPositive ? offset : -offset});

  return (
    <main>
      <h1>Jess' Cipher-inator 🤖</h1>
      <form>
        <div>
          <label id='textEncryptionInput'>
            Text:
            <input
              aria-labelledby='textEncryptionInput'
              type="text"
              placeholder='Enter text to encrypt here!'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label id='offsetRange'>
            Offsetting result by: {offset}
            <input
              aria-labelledby='offsetRange'
              type='range'
              value={offset}
              min={1}
              max={25}
              onChange={(e) => setOffset(parseInt(e.target.value, 10))}
            />
          </label>
        </div>
        <div>
          <label id='positiveRadioButton'>
            <input
              aria-labelledby='positiveRadioButton'
              type="radio"
              checked={isPositive}
              onChange={() => setIsPositive(true)}
            />
            Positive
          </label>
          <label id='negativeRadioButton'>
            <input
              aria-labelledby='negativeRadioButton'
              type="radio"
              checked={!isPositive}
              onChange={() => setIsPositive(false)}
            />
            Negative
          </label>
        </div>
      </form>
      <div>
        <label id='textPreviewLabel'>
          Preview:
          <p aria-labelledby='textPreviewLabel' className='textPreview'>{cipheredText.result}</p>
        </label>
      </div>
    </main>
  );
};

export default CaesarCipherForm;