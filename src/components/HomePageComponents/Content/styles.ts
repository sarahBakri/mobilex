import { Theme } from '@mui/material';
import { makeStyles } from '../../../makeStyles';

const useStyles = makeStyles()((theme: Theme) => {
	return {
		discoverButton: {
			backgroundColor: '#8696a0',
			borderRadius: '0px',
			color: 'white',
			padding: '15px 20px',
			fontWeight: 'bold',
			'&:hover': {
				backgroundColor: '#000',
			},
		},
		blackText: {
			color: '#000',
		},
	};
});
export default useStyles;
