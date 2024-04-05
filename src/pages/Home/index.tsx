import React from 'react';
import { Grid } from '@mui/material';
import Cover from '../../components/HomePageComponents/Cover';
import useStyles from './styles';
import Content from '../../components/HomePageComponents/Content';
import Logo from '../../components/Logo';

const Home = (): JSX.Element => {
	const { classes } = useStyles();

	return (
		<Grid container>
			<Grid container>
				<Cover />
			</Grid>
			<Grid container className={classes.pageContainer}>
				<Content />
			</Grid>
			<Grid
				container
				justifyContent="space-between"
				style={{ height: '130px', backgroundColor: '#1B172F', color: 'white' }}
			>
				<Grid item container xs={3.6} />
				<Grid item container xs={3.6} justifyContent="center">
					<Grid item container xs={5.5} justifyContent="center">
						<Logo />
					</Grid>
				</Grid>
				<Grid item container xs={3.6} />
			</Grid>
		</Grid>
	);
};

export default Home;
