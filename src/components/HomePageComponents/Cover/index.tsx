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
				<Typography variant="h6" paddingY={2} textTransform="uppercase" className={classes.subTitle}>
					مجموعة جديدة
				</Typography>
				<Typography variant="h2" paddingBottom={2} className={classes.title}>
					اكتشف العناصر الأعلى تقييمًا
				</Typography>
				<Button className={classes.discoverButton}>اكتشف الان</Button>
			</Grid>
		</Grid>
	);
};

export default Cover;
