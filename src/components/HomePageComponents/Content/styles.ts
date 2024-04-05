import { Theme } from '@mui/material';
import { makeStyles } from '../../../makeStyles';
import sec1 from '../../../assets/sec1.jpg';
import sec2 from '../../../assets/sec2.jpg';
import sec3 from '../../../assets/sec3.jpg';
import cover from '../../../assets/cover__2.jpg';

const useStyles = makeStyles()((theme: Theme) => {
	return {
		discoverButton: {
			backgroundColor: '#485ad7',
			// borderRadius: '0px',
			color: 'white',
			padding: '15px 20px',
			fontWeight: 'bold',
			fontFamily: 'Janna',
			fontSize: '18px',
			'&:hover': {
				backgroundColor: '#1B172F',
			},
		},
		blackText: {
			color: '#000',
		},
		sec1: {
			backgroundImage: `url(${sec1})`,
			height: '500',
			width: '100%',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
		},
		sec2: {
			backgroundImage: `url(${sec2})`,
			height: '500',
			width: '100%',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
		},
		sec3: {
			backgroundImage: `url(${sec3})`,
			height: '500',
			width: '100%',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
		},
		sec1Title: {
			fontSize: '40px',
			color: '#3c3c5b',
		},
		sec1subTitle: {
			fontSize: '16px',
			color: '#3c3c5b',
		},
		coverContainer: {
			display: 'flex',
			position: 'relative',
		},
		coverTitle: {
			position: 'absolute',
			top: '25%',
			right: '10%',
			width: '400px',
			[theme.breakpoints.down('md')]: {
				// top: '20%',
				width: '300px',
			},
		},
		title: {
			fontSize: '60px',
			color: 'white',
			fontWeight: '600',
			fontFamily: 'Janna',
			[theme.breakpoints.down('md')]: {
				fontSize: '40px',
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
			backgroundPosition: 'bottom',
			backgroundSize: 'cover',
			backgroundColor: '#1A1C29',
			[theme.breakpoints.down('md')]: {
				backgroundSize: 'contain',
			},
		},
		productsSecTitle: {
			color: '#485ad7',
		},
		// cover: {
		// 	backgroundImage: `url(${cover})`,
		// 	height: '600px',
		// 	width: '100%',
		// 	backgroundRepeat: 'no-repeat',
		// 	backgroundPosition: 'center',
		// 	backgroundSize: 'cover',
		// },
	};
});
export default useStyles;
