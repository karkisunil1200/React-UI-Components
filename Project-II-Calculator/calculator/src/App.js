import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div class='app'>
      <CalculatorDisplay />
      <ActionButton text={'clear'} buttonStyle={'zero'} />
      <NumberButton text={'÷'} buttonStyle={'operator-button'} />
      <NumberButton text={'9'} buttonStyle={'number-button'} />
      <NumberButton text={'8'} buttonStyle={'number-button'} />
      <NumberButton text={'7'} buttonStyle={'number-button'} />
      <NumberButton text={'x'} buttonStyle={'operator-button'} />
      <NumberButton text={'6'} buttonStyle={'number-button'} />
      <NumberButton text={'5'} buttonStyle={'number-button'} />
      <NumberButton text={'4'} buttonStyle={'number-button'} />
      <NumberButton text={'-'} buttonStyle={'operator-button'} />
      <NumberButton text={'3'} buttonStyle={'number-button'} />
      <NumberButton text={'2'} buttonStyle={'number-button'} />
      <NumberButton text={'1'} buttonStyle={'number-button'} />
      <NumberButton text={'+'} buttonStyle={'operator-button'} />

      <ActionButton text={'0'} buttonStyle={'zero'} />
      <NumberButton text={'='} buttonStyle={'operator-button'} />
    </div>
  );
};

export default App;
