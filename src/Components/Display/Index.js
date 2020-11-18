import React from 'react';
import {Container} from '../Display/styles'

const Display = ({inputBin, decNum}) => {

  return (
    <Container>
      <div>
        <p>{decNum}</p>
      </div>
    </Container>
        
  )
}

export default Display