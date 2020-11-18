import React from 'react';
import { Container } from '../Input/styles';

function Input({inputBin, handleBinaryInput}) {
  return (
    <Container>
      <div>
        <h2>BIN2DEC</h2>
        <p>Insira um numero binario</p>
      </div>
      <div>
          <input
            name = "binarynum"
            type = "text"
            minLength = "1"
            value = {inputBin.value}
            onChange= {(e) => handleBinaryInput(e)}
            autoFocus
          />
      </div>
      </Container>
  );
}

export default Input;