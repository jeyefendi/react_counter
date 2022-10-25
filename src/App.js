import React from 'react';
import './index.scss';

function App() {
  // let count = 0;
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  }

  const onClickMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={onClickMinus}>-</button>
        <button className="plus" onClick={onClickPlus}>+</button>
      </div>
    </div>
  );
}

export default App;
