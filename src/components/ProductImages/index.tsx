/* eslint-disable import/no-dynamic-require */
import { Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import classNames from 'classnames';
import useStyles from './styles';

const ProductImages = ({ images, productId }: { images: string[]; productId: string }): JSX.Element => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const { classes } = useStyles();

	return (
		<Grid container item xs={12}>
			<Grid item container xs={12} position="relative" boxShadow="1">
				<img
					src={`${process.env.PUBLIC_URL}${images[currentImageIndex]}`}
					alt="productImage"
					className={classes.currentImage}
					style={{ width: '100%', maxHeight: '355px', objectFit: 'contain' }}
				/>
				<Grid item container xs={12} justifyContent="space-between" position="absolute" top="40%" paddingX={1}>
					<IconButton
						// className={classes.arrowButton}
						disabled={currentImageIndex === 0}
						onClick={() => {
							setCurrentImageIndex((currentImageIndex - 1) % images.length);
						}}
					>
						<KeyboardArrowRightIcon htmlColor={currentImageIndex === 0 ? '#aaa' : '#000'} />
					</IconButton>
					<IconButton
						// className={classes.arrowButton}
						onClick={() => {
							setCurrentImageIndex((currentImageIndex + 1) % images.length);
						}}
					>
						<KeyboardArrowLeftIcon htmlColor="#000" />
					</IconButton>
				</Grid>
			</Grid>
			<Grid item container xs={12} paddingY={2} justifyContent="space-between" wrap="nowrap" overflow="hidden">
				{images?.map((image, i) => (
					<Grid
						item
						container
						xs={2.7}
						key={`PRODUCT-${productId + i}`}
						border={i === currentImageIndex ? 1 : 0}
						boxShadow="1"
					>
						<img
							src={`${process.env.PUBLIC_URL}${image}`}
							alt="productImage"
							style={{ width: '100%', objectFit: 'cover', maxHeight: '120px' }}
						/>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default ProductImages;
