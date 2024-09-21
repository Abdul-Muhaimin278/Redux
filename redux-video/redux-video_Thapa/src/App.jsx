import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
	incNumber,
	decNumber,
	divideNumber,
	multiNumber,
} from "./store/actions";

function App() {
	const myState = useSelector((state) => state.changeTheNumber);
	const myMultState = useSelector((state) => state.changeNumber);
	const dispatch = useDispatch();

	return (
		<>
			<div className="container">
				<h1>Increment/Decrement counter</h1>
				<div>
					<p className="quantity">
						<a
							className="quantity__minus"
							title="Decrement"
							onClick={() => dispatch(decNumber(5))}
						>
							<span>-</span>
						</a>
						<input
							name="quantity"
							type="text"
							className="quantity__input"
							value={myState}
						/>
						<a
							className="quantity__plus"
							title="Increment"
							onClick={() => dispatch(incNumber(5))}
						>
							<span>+</span>
						</a>
					</p>
				</div>

				<h1>Multiplication/Division counter</h1>
				<div>
					<p className="quantity">
						<a
							className="quantity__minus"
							title="Decrement"
							onClick={() => dispatch(multiNumber(5))}
						>
							<span>*</span>
						</a>
						<input
							name="quantity"
							type="text"
							className="quantity__input"
							value={myMultState}
						/>
						<a
							className="quantity__plus"
							title="Increment"
							onClick={() => dispatch(divideNumber(5))}
						>
							<span>/</span>
						</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default App;
