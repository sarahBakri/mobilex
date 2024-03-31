import { Theme } from '@mui/material';
import { makeStyles } from '../../makeStyles';

const useStyles = makeStyles()((theme: Theme) => {
	return {
		pageContainer: {
			width: '80%',
			margin: '100px auto',
			maxWidth: '1200px',
		},
	};
});
export default useStyles;
