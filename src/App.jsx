import './App.css';

import { createContext } from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import { useLanguage } from './helpers/useLanguage';
import Footer from './components/Footer/Footer';

const LanguageContext = createContext(null);
export { LanguageContext };

export default function App() {
	return (
		<LanguageContext.Provider value={useLanguage()}>
			<Header />
			<main className='main'>
				<AppRouter />
			</main>
			<Footer />
		</LanguageContext.Provider>
	);
}
