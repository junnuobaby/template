import React from 'react';
import { render } from 'react-dom';
import { square } from 'src/math';
import './style';

const appInit = () => {
  render(
    <div className="red">
      <span> 5 * 5 = {square(5)}</span>
    </div>,
    document.getElementById('root')
  );
};

export default appInit;

