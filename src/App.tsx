/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, GlobalStyles, Grid, StyledEngineProvider, ThemeProvider } from '@mui/material';
import Home from './pages/Home/index';
import Products from './pages/Products';
import AppBar from './components/HomePageComponents/AppBar';
import Layout from './components/Layout';
import ProductItem from './pages/ProductItem';

const theme = createTheme({
	typography: {
		fontFamily: 'Janna',
	},
});

const App = (): JSX.Element => {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
					path: '/mobilex',
					element: <Home />,
				},
				{
					path: '/mobilex/products/:category',
					element: <Products />,
				},
				{
					path: '/mobilex/product/:id',
					element: <ProductItem />,
				},
			],
		},
	]);

	return (
		<div dir="RTL">
			<StyledEngineProvider injectFirst>
				<GlobalStyles
					styles={{
						body: {
							fontFamliy: 'Janna !important',
						},
					}}
				/>
				<ThemeProvider theme={theme}>
					<RouterProvider router={router} />
				</ThemeProvider>
			</StyledEngineProvider>
		</div>
	);
};

export default App;
