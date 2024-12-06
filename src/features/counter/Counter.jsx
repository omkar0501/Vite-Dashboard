import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './CounterSlice'
import Button from 'react-bootstrap/Button'

export function Counter() {
  const count = useSelector((state) => state.counter.value);  //used to get value or state
  const dispatch = useDispatch()                              // used to call dispatch()

  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}               // increment is a action that going to perform in a reducer throught dispatch fun
        >
          Increment
        </Button>
        <span className='m-3'>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  )
}