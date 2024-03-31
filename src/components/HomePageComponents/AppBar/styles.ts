import { Theme } from '@mui/material';
import { keyframes } from '@emotion/react';

import { makeStyles } from '../../../makeStyles';

const headerAnnimation = keyframes`
    0% { transform: translate3d(0, -100%, 0);}
	100% { transform: none; }
`;
const useStyles = makeStyles()((theme: Theme) => {
	return {
		appBarAnnimiation: {
			animation: `${headerAnnimation} .6s ease`,
			border: '1px solid #e1e2e4',
		},
		appBar: {
			position: 'fixed',
			top: '0',
			left: '0',
			width: '100%',
			zIndex: '100',
			backgroundColor: '#fff',
		},
		link: {
			textDecoration: 'none',
			color: '#000',
			textTransform: 'uppercase',
			position: 'relative',
			fontWeight: '600',
			padding: '0px',
			minWidth: 'unset',
			'&::after': {
				content: '""',
				position: 'absolute',
				width: '100%',
				transform: 'scaleX(0)',
				height: '2px',
				bottom: '-3px',
				left: '0',
				backgroundColor: '#000',
				transformOrigin: 'bottom right',
				transition: 'transform 0.25s ease-out',
			},
			'&:hover::after': {
				transform: 'scaleX(1)',
				transformOrigin: 'bottom left',
			},
			'&:hover': {
				backgroundColor: '#fff',
			},
		},
		menuItem: {
			maxWidth: '140px',
			whiteSpace: 'unset',
		},
	};
});
export default useStyles;
