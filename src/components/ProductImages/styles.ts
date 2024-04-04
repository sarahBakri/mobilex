import { makeStyles } from '../../makeStyles';

const useStyles = makeStyles()((theme) => {
	return {
		currentImage: { width: '100%', maxHeight: '355px', objectFit: 'contain' },
		arrowButton: {
			boxShadow: theme.shadows[3],
		},
	};
});
export default useStyles;
