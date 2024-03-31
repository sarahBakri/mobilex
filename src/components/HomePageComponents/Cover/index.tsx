/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import useStyles from './styles';

const Cover = (): JSX.Element => {
	const { classes } = useStyles();

	return (
		<Grid container className={classes.coverContainer}>
			<Grid className={classes.cover} />
			<Grid item className={classes.coverTitle}>
				<Typography variant="h6" paddingY={2} textTransform="uppercase">
					New Collection
				</Typography>
				<Typography variant="h2" paddingBottom={2}>
					Discover top rated items
				</Typography>
				<Button className={classes.discoverButton}>Discover now</Button>
			</Grid>
		</Grid>
	);
};

export default Cover;
