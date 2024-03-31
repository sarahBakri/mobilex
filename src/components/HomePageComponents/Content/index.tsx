import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import cover2 from '../../../assets/cover2.jpg';
import useStyles from './styles';
import ProductCard from '../../ProductCard';

const Content = (): JSX.Element => {
	const { classes } = useStyles();

	return (
		<Grid container>
			<Grid container>
				<Grid item xs={8.5}>
					<img src={cover2} alt="ACCESSORIES" />
				</Grid>
				<Grid item container xs={3.5} alignItems="center" justifyContent="center">
					<Grid item xs={12}>
						<Typography variant="body2" fontWeight="600" paddingY={2} textTransform="uppercase">
							FEATURED MAC ACCESSORIES
						</Typography>
						<Typography variant="h4" paddingBottom={2}>
							Make the perfect connection
						</Typography>
						<Typography variant="body1" paddingBottom={2} color="#797b7e">
							Sale up to 50% off!
						</Typography>
						<Button className={classes.discoverButton}>Shop now</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid container justifyContent="space-between">
				<Grid item container paddingTop={7} paddingBottom={3} xs={12} justifyContent="space-between">
					<Typography variant="h4">On Sale</Typography>
					<Button variant="text" className={classes.blackText}>
						View All
					</Button>
				</Grid>
				<Grid item xs={2.8}>
					<ProductCard />
				</Grid>
				<Grid item xs={2.8}>
					<ProductCard />
				</Grid>
				<Grid item xs={2.8}>
					<ProductCard />
				</Grid>
				<Grid item xs={2.8}>
					<ProductCard />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Content;
