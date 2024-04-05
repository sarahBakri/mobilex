/* eslint-disable import/no-extraneous-dependencies */
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Divider,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../Logo';
import SearchIcon from '../../../assets/search32.png';
import WhiteHeart from '../../../assets/heartWhite.png';
import useStyles from './styles';

const AppBar = (): JSX.Element => {
	const { classes } = useStyles();
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [width, setWidth] = useState(window.innerWidth);
	const isOpen = Boolean(anchorEl);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		console.log('gggggggggg');
		setIsDrawerOpen(newOpen);
	};
	useEffect(() => {
		const handleResize = (): void => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
	};
	const menuOptions = [
		{
			title: 'جميع المنتجات',
			target: '/mobilex/products/all',
		},
		{
			title: 'اكسسوارات',
			target: '/mobilex/products/accessories',
		},
		{
			title: 'الكاميرات والتصوير الفوتوغرافي',
			target: '/mobilex/products/cameras',
		},
		{
			title: 'أجهزة الكمبيوتر',
			target: '/mobilex/products/computers',
		},
		{
			title: 'الهواتف المحمولة',
			target: '/mobilex/products/all',
		},
		{
			title: 'وصل حديثًا',
			target: '/mobilex/products/newArrival',
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
				<Grid item xl={1.5} lg={1.8} md={2.5} xs={7} alignItems="center">
					<Grid container alignItems="center" style={{ height: '100%' }}>
						<Logo />
					</Grid>
				</Grid>
				{width >= 865 ? (
					<>
						<Grid item xs={4.1}>
							<Grid container justifyContent="center" alignItems="center" gap={2} style={{ height: '100%' }}>
								<Button
									className={classes.link}
									onClick={() => {
										navigate('/mobilex');
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
					</>
				) : (
					<Grid item container xs={3} justifyContent="end">
						<IconButton
							onClick={() => {
								setIsDrawerOpen(true);
							}}
						>
							<MenuIcon htmlColor="#485ad7" />
						</IconButton>
					</Grid>
				)}
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
			<Drawer
				dir="rtl"
				open={isDrawerOpen}
				onClose={() => {
					setIsDrawerOpen(false);
				}}
			>
				<Box
					sx={{ width: '320px' }}
					role="presentation"
					// onClick={() => {
					// 	setIsDrawerOpen(false);
					// }}
				>
					<Grid container justifyContent="space-between" padding={2}>
						<Logo />
						<IconButton
							onClick={() => {
								setIsDrawerOpen(false);
							}}
						>
							<CloseIcon />
						</IconButton>
					</Grid>
					<List>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => {
									setIsDrawerOpen(false);
									navigate('/mobilex');
								}}
							>
								<ListItemText style={{ textAlign: 'right' }} primary="الرئيسيه" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<Accordion classes={{ root: classes.accordionRoot }}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon htmlColor="#485ad7" />}
									aria-controls="panel1-content"
									id="panel1-header"
									classes={{
										content: classes.accordionSummaryRoot,
									}}
									style={{ textAlign: 'right' }}
								>
									<p style={{ textAlign: 'right' }}>المجموعات</p>
								</AccordionSummary>
								<AccordionDetails>
									<List>
										{menuOptions.map((option) => (
											<ListItem key={option.title} disablePadding>
												<ListItemButton
													onClick={() => {
														setIsDrawerOpen(false);
														navigate(option.target);
													}}
												>
													<ListItemText primary={option.title} style={{ textAlign: 'right' }} />
												</ListItemButton>
											</ListItem>
										))}
									</List>
								</AccordionDetails>
							</Accordion>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText style={{ textAlign: 'right' }} primary="معلومات عنا" />
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</>
	);
};

export default AppBar;
