/* eslint-disable import/no-extraneous-dependencies */
import { Grid, IconButton, Dialog, DialogContent, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import WhiteHeart from '../../assets/heartWhite.png';
import product1 from '../../assets/product1_img1.jpg';
import product2 from '../../assets/product1_img2.jpg';
import product3 from '../../assets/product1_img3.jpg';
import product4 from '../../assets/product1_img4.jpg';
import ProductImages from '../ProductImages';

const ProductCard = (): JSX.Element => {
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
		<Grid container alignItems="center" position="relative" boxShadow={1}>
			<Grid item container xs={12} justifyContent="space-between" position="absolute" zIndex={3} top={0}>
				<Grid item>
					<div className={classNames(classes.label, { [`${classes.discount}`]: true })}>-11%</div>
					<div className={classNames(classes.label, { [`${classes.new}`]: true })}>New</div>
					<div className={classNames(classes.label, { [`${classes.discount}`]: true })}>Sale</div>
				</Grid>
				<Grid item>
					<IconButton aria-label="wishList">
						<img src={WhiteHeart} alt="wishList" style={{ width: '24px', height: '24px' }} />
					</IconButton>
				</Grid>
			</Grid>
			<Grid item container className={classes.cardContentWraper} position="relative">
				<img src={product1} alt="productName" className={classes.img} />
				<Grid container position="absolute" bottom={0} zIndex={20}>
					<Grid item container justifyContent="center" gap={2}>
						<IconButton className="iconButton" onClick={handleClickOpen}>
							<VisibilityIcon htmlColor="white" />
						</IconButton>
						<IconButton
							className="iconButton"
							onClick={() => {
								window.open(`https://wa.me/+201113362532?text=${encodeURI('hello')}`, '_blank');
							}}
						>
							<WhatsAppIcon htmlColor="white" />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				justifyContent="center"
				paddingY={2}
				className={classes.cardContainer}
				onClick={() => {
					navigate('/mobilex/product/1');
				}}
			>
				<div className={`${classes.textTruncate} ${classes.productName}`}>Galaxy Tab S3 9.7 Wifi Tablet (Black)</div>
				<Grid item container justifyContent="center" alignItems="center">
					<div className={`${classes.price} ${classes.afterDicount}`}>$80</div>
					<div className={`${classes.price} ${classes.beforeDiscount}`}>$90</div>
				</Grid>
			</Grid>

			<Dialog
				dir="rtl"
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="md"
			>
				<DialogContent>
					<Grid container gap={4}>
						<Grid item md={5}>
							<ProductImages productId="3" images={[product1, product2, product3, product4]} />
						</Grid>
						<Grid item md={6.5}>
							<Grid container>
								<div className={classNames(classes.label, { [`${classes.inStock}`]: true })}>In Stock</div>
							</Grid>
							<Grid container paddingY={2}>
								<div className={classes.productNameQuickView}>S2 Smartwatch Silver</div>
							</Grid>
							<Grid container paddingBottom={2}>
								<div
									className={classNames(classes.priceQuickView, { [`${classes.priceAfterDiscountQuickView}`]: true })}
								>
									$200.00
								</div>
								<div className={classes.beforeDiscountQuickView}>$250.00</div>
								<div className={`${classes.beforeDiscountQuickView} ${classes.discountValueQuickView}`}>
									Save 11% OFF
								</div>
							</Grid>
							<Grid container paddingY={2}>
								<div className={`${classes.description}`}>
									It is clear that our way of life must be as comfortable as possible Many of our clients were surprised
									by the incredible assortment of products in our store. You know, we have m...
								</div>
							</Grid>
							<Grid container paddingY={4}>
								<Grid item xs={12}>
									<Button className={`${classes.button}`}>
										<Grid item container justifyContent="center">
											<WhatsAppIcon />

											<Grid item paddingX={1}>
												{' '}
												طلب عبر الواتساب
											</Grid>
										</Grid>
									</Button>
								</Grid>
								<Grid item xs={12} paddingY={3}>
									<Button variant="text" fullWidth className={classes.textButton}>
										عرض المعلومات الكاملة
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
		</Grid>
	);
};

export default ProductCard;
