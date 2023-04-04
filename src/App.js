import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {count}
      {' '}
      <br />
      <button type="button" onClick={() => dispatch(increment())}>Increment</button>
      {' '}
      <br />
      <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
      <button type="button" onClick={() => dispatch(incrementByAmount(3))}>Add by 3</button>
    </div>
  );
}

export default App;
