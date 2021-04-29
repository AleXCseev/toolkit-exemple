import { useDispatch, useSelector } from "react-redux"
import {decrement, increment} from "./reducers";

function App() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

	return (
		<div className="App">
			<h1>{ count }</h1>
				<hr/>
			<button onClick={()=> dispatch(increment())}>Increment</button>
			<button onClick={()=> dispatch(decrement())}>Decrement</button>
		</div>
	);
}

export default App;
