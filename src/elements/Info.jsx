import { useSelector } from 'react-redux';
export const Info = () => {
    const count = useSelector((state) => state.counter.value);
    return (
        <>{count}</>
    )
}
