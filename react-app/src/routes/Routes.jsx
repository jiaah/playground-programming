import React from 'react';
import { useRoutes } from 'react-router-dom';
import Main from '../components/main';
import Timer from '../components/timer';

const RoutesComponent = () => {
	const routes = useRoutes([
		{ path: '/', element: <Main /> },
		{ path: 'timer', element: <Timer /> },
	]);

	return routes;
};

export default RoutesComponent;
