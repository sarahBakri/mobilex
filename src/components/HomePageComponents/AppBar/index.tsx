/* eslint-disable import/no-extraneous-dependencies */
import { Button, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from '../../Logo';
import SearchIcon from '../../../assets/search32.png';
import WhiteHeart from '../../../assets/heartWhite.png';
import useStyles from './styles';

const AppBar = (): JSX.Element => {
	const { classes } = useStyles();
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpen = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
	};
	const menuOptions = [
		{
			title: 'جميع المنتجات',
			target: '/products/all',
		},
		{
			title: 'اكسسوارات',
			target: '/products/accessories',
		},
		{
			title: 'الكاميرات والتصوير الفوتوغرافي',
			target: '/products/cameras',
		},
		{
			title: 'أجهزة الكمبيوتر',
			target: '/products/computers',
		},
		{
			title: 'الهواتف المحمولة',
			target: '/products/all',
		},
		{
			title: 'وصل حديثًا',
			target: '/products/newArrival',
		},
	];

	return (
		<>
			<Grid
				container
				paddingY={2}
				paddingX={3}
				justifyContent="space-between"
				className={`${classes.appBar} ${classes.appBarAnnimiation}`}
			>
				<Grid item xs={2} alignItems="center">
					<Grid container alignItems="center" style={{ height: '100%' }}>
						<Logo />
					</Grid>
				</Grid>
				<Grid item xs={3}>
					<Grid container justifyContent="center" alignItems="center" gap={2} style={{ height: '100%' }}>
						<Button
							className={classes.link}
							onClick={() => {
								navigate('/');
							}}
						>
							الرئيسيه
						</Button>
						<Button
							className={classes.link}
							aria-controls={isOpen ? 'basic-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={isOpen ? 'true' : undefined}
							onClick={handleClick}
							classes={{ endIcon: classes.endIcon }}
							endIcon={
								isOpen ? <KeyboardArrowUpIcon htmlColor="#4759D7" /> : <KeyboardArrowDownIcon htmlColor="#4759D7" />
							}
							// onMouseLeave={handleClose}
						>
							المجموعات
						</Button>

						<Button className={classes.link}>معلومات عنا</Button>
					</Grid>
				</Grid>
				<Grid item xs={2}>
					<Grid container justifyContent="flex-end" alignItems="center" gap={1} style={{ height: '100%' }}>
						<IconButton aria-label="delete">
							<img src={SearchIcon} alt="Search" style={{ width: '24px', height: '24px' }} />
						</IconButton>
						<IconButton aria-label="delete">
							<img src={WhiteHeart} alt="Search" style={{ width: '24px', height: '24px' }} />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
			<Menu
				dir="rtl"
				id="basic-menu"
				anchorEl={anchorEl}
				open={isOpen}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}

				// classes={{
				// 	paper: classes.menuPaper,
				// }}
			>
				{menuOptions.map((option) => (
					<MenuItem
						key={option.title}
						onClick={() => {
							handleClose();
							navigate(option.target);
						}}
						className={classes.menuItem}
					>
						{option.title}
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

export default AppBar;
