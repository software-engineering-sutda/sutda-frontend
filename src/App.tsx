import { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';
import SutdaGame from './component/sutda-game';

function App() {
	const [count, setCount] = useState(0);

	return <SutdaGame />;
}

export default App;
