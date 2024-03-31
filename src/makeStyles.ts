import { useTheme } from '@mui/material/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMakeAndWithStyles } from 'tss-react';

export const { makeStyles, withStyles } = createMakeAndWithStyles({
	useTheme,
});
