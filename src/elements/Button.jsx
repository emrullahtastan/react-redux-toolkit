import { useDispatch } from 'react-redux';
import { increment } from '../features/counter/counterSlice';

export const Button = () => {
    const dispatch = useDispatch();
    return (
        <><button onClick={() => dispatch(increment())}>Increment</button></>
    )
}
