import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Resume } from './components';
import MainSite from './MainSite';

export const context = createContext<{ 
	isLight: boolean, 
	setIsLight: (isLight: boolean) => void,
}>({ isLight: false, setIsLight: () => {} });

function App() {

	const [isLight, setIsLight] = useState<boolean>(false);

	return (
		<context.Provider value={{ isLight, setIsLight }}>
			<Router>
				<Routes>
					<Route path="/" element={<MainSite />} />
				</Routes>
				<Routes>
					<Route path="/resume" element={<Resume />} />
				</Routes>
			</Router>
		</context.Provider>
	)
}

export default App