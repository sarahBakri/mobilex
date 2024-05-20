/* eslint-disable import/no-extraneous-dependencies */
import { Grid, IconButton, Dialog, DialogContent, Button, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import WhiteHeart from '../../assets/heartWhite.png';
import product1 from '../../assets/products/mobiles/1/1.jpg';
import product2 from '../../assets/products/mobiles/1/2.png';
import product3 from '../../assets/products/mobiles/1/3.jpg';
import product4 from '../../assets/product1_img4.jpg';
import ProductImages from '../../components/ProductImages';
import ProductCard from '../../components/ProductCard';

const ProductItem = (): JSX.Element => {
	const { classes } = useStyles();
	const [isOpen, setOpen] = React.useState(false);

	const handleClickOpen = (): void => {
		setOpen(true);
	};

	const handleClose = (): void => {
		setOpen(false);
	};
	const navigate = useNavigate();

	return (
		<Grid container padding={4} className={classes.pageContainer}>
			<Grid container>
				<Grid item md={5}>
					<ProductImages
						productId="3"
						images={[
							`/images/products/mobiles/1/1.jpg`,
							'/images/products/mobiles/1/2.png',
							'/images/products/mobiles/1/3.jpg',
						]}
					/>
				</Grid>
				<Grid item md={6.5} paddingX={4}>
					<Grid container>
						<div className={classNames(classes.label, { [`${classes.inStock}`]: true })}>In Stock</div>
					</Grid>
					<Grid container paddingY={2}>
						<div className={classes.productNameQuickView}>S2 Smartwatch Silver</div>
					</Grid>
					<Grid container paddingBottom={2}>
						<div className={classNames(classes.priceQuickView, { [`${classes.priceAfterDiscountQuickView}`]: true })}>
							$200.00
						</div>
						<div className={classes.beforeDiscountQuickView}>$250.00</div>
						<div className={`${classes.beforeDiscountQuickView} ${classes.discountValueQuickView}`}>Save 11% OFF</div>
					</Grid>
					<Grid container paddingY={2}>
						<div className={`${classes.description}`}>
							It is clear that our way of life must be as comfortable as possible Many of our clients were surprised by
							the incredible assortment of products in our store. You know, we have m...
						</div>
					</Grid>
					<Grid container paddingY={4}>
						<Grid item xs={12}>
							<Button className={`${classes.button}`}>
								<Grid item container justifyContent="center">
									<WhatsAppIcon />

									<Grid item paddingX={1}>
										{' '}
										Order on WhatsApp
									</Grid>
								</Grid>
							</Button>
						</Grid>
						<Grid item xs={12} paddingY={3}>
							<Button variant="text" fullWidth className={classes.textButton}>
								view full info
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container justifyContent="space-between">
				<Grid item container padding={3} xs={12} justifyContent="CENTER">
					<Typography variant="h4">الاكثر مبيعا</Typography>
				</Grid>
				{/* <Grid item md={2.8} paddingY={{ md: 0, xs: 2 }}>
					<ProductCard />
				</Grid>
				<Grid item md={2.8} paddingY={{ md: 0, xs: 2 }}>
					<ProductCard />
				</Grid>
				<Grid item md={2.8} paddingY={{ md: 0, xs: 2 }}>
					<ProductCard />
				</Grid>
				<Grid item md={2.8} paddingY={{ md: 0, xs: 2 }}>
					<ProductCard />
				</Grid> */}
			</Grid>
		</Grid>
	);
};

export default ProductItem;
