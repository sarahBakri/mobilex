import { Theme } from '@mui/material';
import { makeStyles } from '../../makeStyles';

const useStyles = makeStyles()((theme: Theme) => {
	return {
		pageContainer: {
			width: '80%',
			margin: '100px auto',
			maxWidth: '1200px',
			minWidth: '350px',
			[theme.breakpoints.down('md')]: {
				margin: '40px auto',
			},
		},
		title: {
			color: '#485ad7',
			fontWeight: '600',
			fontSize: '44px',
			padding: '20px',
			backgroundColor: '#f2f4ff',
		},
	};
});
export default useStyles;
