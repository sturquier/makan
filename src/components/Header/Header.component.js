import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import * as routes from '../../constants/routes'
import styles from './Header.style'

const Header = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<IconButton 
					aria-label='Home' 
					component={Link} 
					to={routes.ROOT_PAGE}><HomeIcon/>
				</IconButton>
				<Typography 
					variant='title' 
					style={styles.typo}
					component={Link}
					to={routes.SEARCH_RECIPES_BY_CATEGORIES}>Recipes
				</Typography>
				<Typography 
					variant='title' 
					style={styles.typo}
					component={Link}
					to={routes.SEARCH_RECIPES_BY_INGREDIENTS}>Ingredients
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default withStyles(styles)(Header)