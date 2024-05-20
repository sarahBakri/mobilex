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

interface IProduct {
	discount?: string;
	new?: boolean;
	images: string[];
	id: number;
	name: string;
	description: string;
	priceAfterPrice?: string;
	price: string;
	status: string;
}

const ProductCard = ({ data }: { data: IProduct }): JSX.Element => {
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
					{data.discount && (
						<div className={classNames(classes.label, { [`${classes.discount}`]: true })}>{data.discount}</div>
					)}
					{data.new && <div className={classNames(classes.label, { [`${classes.new}`]: true })}>جديد </div>}
					{data.discount && <div className={classNames(classes.label, { [`${classes.discount}`]: true })}>خصم</div>}
				</Grid>
				<Grid item>
					<IconButton aria-label="wishList">
						<img src={WhiteHeart} alt="wishList" style={{ width: '24px', height: '24px' }} />
					</IconButton>
				</Grid>
			</Grid>
			<Grid item container className={classes.cardContentWraper} position="relative">
				<img src={`${process.env.PUBLIC_URL}${data.images[0]}`} alt="productName" className={classes.img} />
				<Grid container position="absolute" bottom={0} zIndex={20}>
					<Grid item container justifyContent="center" gap={2}>
						<IconButton className="iconButton" onClick={handleClickOpen}>
							<VisibilityIcon htmlColor="white" />
						</IconButton>
						<IconButton
							className="iconButton"
							onClick={() => {
								console.log(process.env, 'process.env');
								window.open(
									`https://wa.me/+201113362532?text=${encodeURI(
										`برجاء اتمام الطلب لهذا المنتج ${process.env.PUBLIC_URL}/product/${data.id}`
									)}`,
									'_blank'
								);
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
					navigate(`/mobilex/product/${data.id}`);
				}}
			>
				<div className={`${classes.textTruncate} ${classes.productName}`}>{data.name}</div>
				<Grid item container justifyContent="center" alignItems="center">
					<div className={`${classes.price} ${classes.afterDicount}`}>{data.priceAfterPrice}</div>
					<div className={`${classes.price} ${data.discount ? classes.beforeDiscount : ''}`}>{data.price}</div>
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
							<ProductImages productId="3" images={data.images} />
						</Grid>
						<Grid item md={6.5}>
							<Grid container>
								{data.status && (
									<div
										className={classNames(classes.label, {
											[`${classes.inStock}`]: data.status === 'available',
											[`${classes.discount}`]: data.status !== 'available',
										})}
									>
										{data.status === 'available' ? 'متوفر' : 'غير متوفر'}
									</div>
								)}
							</Grid>
							<Grid container paddingY={2}>
								<div className={classes.productNameQuickView}>{data.name}</div>
							</Grid>
							<Grid container paddingBottom={2}>
								{data.discount && (
									<div
										className={classNames(classes.priceQuickView, {
											[`${classes.priceAfterDiscountQuickView}`]: !!data.discount,
										})}
									>
										{data.priceAfterPrice}
									</div>
								)}
								<div
									className={classNames(classes.priceQuickView, {
										[`${classes.beforeDiscountQuickView}`]: !!data.discount,
									})}
								>
									{data.price}
								</div>
								{data.discount && (
									<div className={`${classes.beforeDiscountQuickView} ${classes.discountValueQuickView}`}>
										Save {data.discount} OFF
									</div>
								)}
							</Grid>
							<Grid container paddingY={2}>
								<div className={`${classes.description}`}>{data.description}</div>
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
									<Button
										variant="text"
										fullWidth
										className={classes.textButton}
										onClick={() => {
											navigate(`/mobilex/product/${data.id}`);
										}}
									>
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
