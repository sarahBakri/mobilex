/* eslint-disable import/no-extraneous-dependencies */
import {
	Grid,
	IconButton,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import WhiteHeart from '../../assets/heartWhite.png';
import product1 from '../../assets/product1_img1.jpg';

const ProductCard = (): JSX.Element => {
	const { classes } = useStyles();
	const [isOpen, setOpen] = React.useState(false);

	const handleClickOpen = (): void => {
		setOpen(true);
	};

	const handleClose = (): void => {
		setOpen(false);
	};

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
				<Grid container position="absolute" bottom={0}>
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
			<Grid item container justifyContent="center" paddingY={2}>
				<div className={`${classes.textTruncate} ${classes.productName}`}>Galaxy Tab S3 9.7 Wifi Tablet (Black)</div>
				<Grid item container justifyContent="center" alignItems="center">
					<div className={`${classes.price} ${classes.afterDicount}`}>$80</div>
					<div className={`${classes.price} ${classes.beforeDiscount}`}>$90</div>
				</Grid>
			</Grid>

			<Dialog
				open={isOpen}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending anonymous location data to Google, even when no
						apps are running.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button onClick={handleClose} autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</Grid>
	);
};

export default ProductCard;
