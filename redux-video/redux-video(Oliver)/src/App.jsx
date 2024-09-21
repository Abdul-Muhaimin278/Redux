import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Add, Subtract } from "./store/actions";

function App() {
	const countData = useSelector((state) => state.countReducer.count);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<h1>Count</h1>
			<h2>{countData}</h2>
			<button onClick={() => dispatch(Add())}>Add 10</button>
			<button onClick={() => dispatch(Subtract())}>Subtract 10</button>
		</div>
	);
}

export default App;
