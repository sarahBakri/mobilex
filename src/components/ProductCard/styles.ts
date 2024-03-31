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
		img: {
			width: '95%',
			height: '230px',
			objectFit: 'contain',
			'&:hover': {
				transform: 'scale(1.04)',
				transition: 'transform .3s ease',
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
				backgroundColor: '#1a1c28',
				display: 'none',
				animation: `${HeaderAnnimation} .6s ease`,
				'&:hover': {
					backgroundColor: '#797b7e',
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
	};
});
export default useStyles;
