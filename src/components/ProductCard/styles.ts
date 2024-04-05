import { keyframes } from '@emotion/react';
import { makeStyles } from '../../makeStyles';

const HeaderAnnimation = keyframes`
    0% { transform: translate3d(0, -50%, 0);}
	100% { transform: none; }
`;
const useStyles = makeStyles()(() => {
	return {
		label: {
			width: '40px',
			padding: '3px 5px',
			fontWeight: '600',
			color: '#fff',
			fontSize: '12px',
			textAlign: 'center',
			marginTop: '8px',
		},
		discount: {
			backgroundColor: '#ea3253',
		},
		new: {
			backgroundColor: '#000',
		},
		inStock: {
			width: '45px',

			backgroundColor: '#44bb9e',
		},
		img: {
			width: '95%',
			height: '230px',
			objectFit: 'contain',
			'&:hover': {
				transform: 'scale(1.04)',
				transition: 'transform .3s ease',
			},
		},
		cardContainer: {
			'&:hover': {
				cursor: 'pointer',
			},
		},
		cardContentWraper: {
			paddingTop: '40px',
			'&:hover': {
				'& .iconButton': {
					display: 'flex',
				},
			},
			'& .iconButton': {
				backgroundColor: '#485ad7',

				display: 'none',
				animation: `${HeaderAnnimation} .6s ease`,
				'&:hover': {
					backgroundColor: '#1B172F',
				},
			},
		},
		textTruncate: {
			fontSize: '14px',
			padding: '5px',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			fontWeight: '400',
			textTransform: 'capitalize',
		},
		productName: {
			fontWeight: '500',

			'&:hover': {
				color: '#8696a0',
			},
		},
		price: {
			fontSize: '16px',
			padding: '5px',
			fontWeight: '600',
			textAlign: 'center',
		},
		afterDicount: {
			color: '#ea3253',
		},
		beforeDiscount: {
			textDecoration: 'line-through',
			color: '#797b7e',
			fontSize: '12px',
		},
		productNameQuickView: {
			fontSize: '24px',
			fontWeight: '600',
		},
		priceQuickView: {
			fontSize: '24px',
			fontWeight: '600',
			paddingInlineEnd: '4px',
		},
		priceAfterDiscountQuickView: {
			color: '#ea3253',
		},
		beforeDiscountQuickView: {
			textDecoration: 'line-through',
			color: '#797b7e',
			fontSize: '14px',
			padding: '4px',
			display: 'flex',
			alignItems: 'end',
		},
		discountValueQuickView: {
			textDecoration: 'none',
			padding: '4px',
			fontSize: '16px',
		},
		description: {
			color: '#797b7e',
			fontSize: '14px',
		},
		button: {
			width: '100%',
			backgroundColor: '#485ad7',
			borderRadius: '0px',
			color: 'white',
			padding: '15px 20px',
			fontWeight: 'bold',
			'&:hover': {
				backgroundColor: '#f2f4ff',
				color: '#485ad7',
			},
		},
		textButton: {
			padding: '15px 20px',
			color: '#485ad7',
			fontWeight: 'bold',
		},
	};
});
export default useStyles;
