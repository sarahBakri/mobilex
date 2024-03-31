import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import AppBar from '../../components/HomePageComponents/AppBar';
import Cover from '../../components/HomePageComponents/Cover';
import useStyles from './styles';
import Content from '../../components/HomePageComponents/Content';

const Home = (): JSX.Element => {
	const { classes } = useStyles();

	return (
		<Grid container>
			<Grid container paddingY={4}>
				<AppBar />
			</Grid>
			<Grid container>
				<Cover />
			</Grid>
			<Grid container className={classes.pageContainer}>
				<Content />
			</Grid>
		</Grid>
	);
};

export default Home;
