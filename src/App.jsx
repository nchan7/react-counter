import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0)

  const handleAddClick = () => {
    setCounter(counter + 1)
  }

  const handleSubtractClick = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="counterApp">
      Counter App 
      <div className="counter">
        {counter}
        <div>
          <button className="subtractButton"
                  onClick={handleSubtractClick}>Subtract</button>
          <button className='addButton'
                  onClick={handleAddClick}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
