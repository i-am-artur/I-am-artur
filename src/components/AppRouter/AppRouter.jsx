import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import routeList from './routeList';

import LoadingIndicator from '../../common/LoadingIndicator/LoadingIndicator';

const Home = lazy(() => import('../Home/Home'));
const Contacts = lazy(() => import('../Contacts/Contacts'));
const Skills = lazy(() => import('../Skills/Skills'));

export default function AppRouter() {
	return (
		<Suspense fallback={<LoadingIndicator />}>
			<Routes>
				<Route path={routeList.home} element={<Home />} />
				<Route path={routeList.contacts} element={<Contacts />} />
				<Route path={routeList.skills} element={<Skills />} />
			</Routes>
		</Suspense>
	);
}
