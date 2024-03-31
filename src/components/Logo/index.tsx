import { Grid, Typography } from '@mui/material';
import React from 'react';

import logo from '../../assets/cross.png';

const Logo = (): JSX.Element => {
	return (
		<Grid container alignItems="center">
			<Typography variant="h5" fontWeight={600}>
				mobile
			</Typography>
			<img src={logo} alt="logo" />
		</Grid>
	);
};

export default Logo;
