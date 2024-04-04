import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../HomePageComponents/AppBar';

const Layout = (): JSX.Element => {
	return (
		<Grid container>
			<Grid container paddingY={4.6}>
				<AppBar />
			</Grid>
			<Grid container>
				<Outlet />
			</Grid>
		</Grid>
	);
};

export default Layout;
