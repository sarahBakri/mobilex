import { Grid, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStyles from './styles';
import ProductCard from '../../components/ProductCard';

interface ICategoryTitle {
	[key: string]: string | undefined;
}

const Products = (): JSX.Element => {
	const categoryTitle: ICategoryTitle = {
		all: 'جميع المنتجات',
		accessories: 'اكسسوارات',
		cameras: 'الكاميرات والتصوير الفوتوغرافي',
		computers: 'أجهزة الكمبيوتر',
		mobiles: 'الهواتف المحمولة',
		NewArrival: 'وصل حديثًا',
	};
	const sortByOptions = ['اسم المنتج', 'اعلى سعر', 'اقل سعر'];
	const { category } = useParams();
	const { classes } = useStyles();
	const [anchorElSortBy, setAnchorElSortBy] = useState<null | HTMLElement>(null);
	const [selectedSortBy, setSelectedSortBy] = useState(sortByOptions[0]);
	const selectedCategory = category || 'all';
	const isOpenSortBy = Boolean(anchorElSortBy);
	const navigate = useNavigate();

	const handleClickSortBy = (event: React.MouseEvent<HTMLButtonElement>): void => {
		setAnchorElSortBy(event.currentTarget);
	};

	const handleCloseSortBy = (): void => {
		setAnchorElSortBy(null);
	};
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpen = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
	};

	return (
		<>
			<Grid container alignItems="center" className={classes.pageContainer}>
				<Grid item container xs={12} justifyContent="center" alignItems="center" className={classes.title}>
					{selectedCategory ? categoryTitle[selectedCategory] : 'Products'}
				</Grid>
				<Grid item container xs={12} padding={2}>
					<Grid container>
						<Grid item container md={3} alignItems="center">
							<Typography variant="body1">ترتيب حسب :</Typography>
							<Button variant="text" onClick={handleClickSortBy}>
								{selectedSortBy}
							</Button>
						</Grid>
						<Grid item container md={6} alignItems="center">
							<Typography variant="body1">عرض مجموعة : </Typography>
							<Button variant="text" onClick={handleClick}>
								{categoryTitle[selectedCategory]}
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item container xs={12} paddingY={3} justifyContent="space-between">
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
					<Grid item md={2.8} paddingY={2}>
						<ProductCard />
					</Grid>
				</Grid>
			</Grid>

			<Menu
				dir="rtl"
				id="basic-menu-anchorElSortBy"
				anchorEl={anchorElSortBy}
				open={isOpenSortBy}
				onClose={handleCloseSortBy}
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
			>
				{sortByOptions.map((option) => (
					<MenuItem
						key={option}
						onClick={() => {
							setSelectedSortBy(option);
							handleCloseSortBy();
						}}
						// className={classes.menuItem}
					>
						{option}
					</MenuItem>
				))}
			</Menu>
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
			>
				{Object.keys(categoryTitle).map((option) => (
					<MenuItem
						key={categoryTitle[option]}
						onClick={() => {
							navigate(`/mobilex/products/${option}`);
							handleClose();
						}}
					>
						{categoryTitle[option]}
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

export default Products;
