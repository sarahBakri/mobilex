import { Grid, Typography } from '@mui/material';
import React from 'react';

import logo from '../../assets/logo3.png';

const Logo = (): JSX.Element => {
	return (
		<Grid container alignItems="center" style={{ color: '#4759D7' }}>
			{/* <Typography variant="h5" fontWeight={600}>
				mobile
			</Typography> */}
			<Grid item container xs={3} alignItems="center">
				<img src={logo} alt="logo" style={{ width: '40px' }} />
			</Grid>
			<Grid item container xs={9}>
				<div style={{ lineHeight: '1.1' }}>
					<div>عبر الاجواء</div>
					<div>mobile shop</div>
				</div>
			</Grid>
		</Grid>
	);
};

export default Logo;
