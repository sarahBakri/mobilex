import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import cover2 from '../../../assets/SEC4.png';
import useStyles from './styles';
import ProductCard from '../../ProductCard';
import Logo from '../../Logo';

const Content = (): JSX.Element => {
	const { classes } = useStyles();

	return (
		<Grid container>
			<Grid container justifyContent="space-between">
				<Grid item container xs={3.8} style={{ height: '600px' }}>
					<Grid className={classes.sec1} padding={3}>
						<Grid className={classes.sec1Title}>اجهزة الكمبيوتر</Grid>
						<Grid className={classes.sec1subTitle}>عرض لوقت محدود!</Grid>
					</Grid>
				</Grid>
				<Grid item container xs={3.8} style={{ height: '600px' }}>
					<Grid className={classes.sec2} padding={3}>
						<Grid className={classes.sec1Title}>اجهزة الكمبيوتر</Grid>
						<Grid className={classes.sec1subTitle}>عرض لوقت محدود!</Grid>
					</Grid>
				</Grid>
				<Grid item container xs={3.8} style={{ height: '600px' }}>
					<Grid className={classes.sec3} padding={3}>
						<Grid className={classes.sec1Title}>اجهزة الكمبيوتر</Grid>
						<Grid className={classes.sec1subTitle}>عرض لوقت محدود!</Grid>
					</Grid>
				</Grid>
				{/* <Grid item container xs={3.8}></Grid>
				<Grid item container xs={3.8}></Grid> */}
			</Grid>
			<Grid container className={classes.coverContainer} paddingY={5}>
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
			<Grid container>
				<Grid item xs={6.5}>
					<img src={cover2} alt="ACCESSORIES" />
				</Grid>
				<Grid item container xs={3.5} alignItems="center" justifyContent="center">
					<Grid item xs={12}>
						<Typography variant="body2" fontWeight="600" paddingY={2} textTransform="uppercase">
							سماعات رأس رائعة
						</Typography>
						<Typography variant="h4" paddingBottom={2}>
							ابحث عن الصوت الخاص بك!
						</Typography>
						<Typography variant="body1" paddingBottom={2} color="#797b7e">
							خصومات تصل إلى 50%!
						</Typography>
						<Button className={classes.discoverButton}>تسوق الان</Button>
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
