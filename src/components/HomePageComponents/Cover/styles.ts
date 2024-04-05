import { Theme } from '@mui/material';
import { keyframes } from '@emotion/react';
import { makeStyles } from '../../../makeStyles';
import cover from '../../../assets/cover3.jpg';

const coverAnnimation = keyframes`
    0% { background-position: 0% 0% }
	100% { background-position: 100% 100% }
`;
const coverAnnimationMD = keyframes`
0% { background-position: 0% 0% }
100% { background-position: 80% 80% }
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
			right: '10%',
			width: '400px',
			[theme.breakpoints.down('md')]: {
				top: '10%',
			},
		},
		title: {
			fontSize: '60px',
			color: 'white',
			fontWeight: '600',
			fontFamily: 'Janna',
			[theme.breakpoints.down('md')]: {
				fontSize: '50px',
			},
		},
		subTitle: {
			fontSize: '20PX',
			color: '#485ad7',
			fontWeight: '600',
			fontFamily: 'Janna',
			// textAlign: 'center',
			// color: '#485ad7',
		},
		cover: {
			backgroundImage: `url(${cover})`,
			height: '600px',
			width: '100%',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			animation: `${coverAnnimation} 5s both`,
			backgroundColor: '#1A1C29',
			[theme.breakpoints.down('md')]: {
				// backgroundPosition: 'top',
				backgroundSize: 'contain',
				animation: `${coverAnnimationMD} 5s both`,
			},
		},
		discoverButton: {
			backgroundColor: '#485ad7',
			// borderRadius: '0px',
			color: 'white',
			padding: '20px 28px',
			fontWeight: 'bold',
			fontFamily: 'Janna',
			fontSize: '18px',
			'&:hover': {
				backgroundColor: '#1B172F',
			},
		},
	};
});
export default useStyles;
