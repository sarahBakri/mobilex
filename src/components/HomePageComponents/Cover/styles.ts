import { Theme } from '@mui/material';
import { keyframes } from '@emotion/react';
import { makeStyles } from '../../../makeStyles';
import cover from '../../../assets/cover.jpg';

const coverAnnimation = keyframes`
    0% { background-position: 100% 100% }
	100% { background-position: 0 0 }
`;

const useStyles = makeStyles()((theme: Theme) => {
	return {
		coverContainer: {
			display: 'flex',
			position: 'relative',
		},
		coverTitle: {
			position: 'absolute',
			top: '30%',
			left: '10%',
			width: '400px',
		},
		cover: {
			backgroundImage: `url(${cover})`,
			height: '600px',
			width: '100%',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			animation: `${coverAnnimation} 5s both`,
		},
		discoverButton: {
			backgroundColor: '#8696a0',
			borderRadius: '0px',
			color: 'white',
			padding: '20px 28px',
			fontWeight: 'bold',
			'&:hover': {
				backgroundColor: '#000',
			},
		},
	};
});
export default useStyles;
