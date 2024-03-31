/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/index';

const App = (): JSX.Element => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
	]);

	return (
		<div dir="ltr">
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
