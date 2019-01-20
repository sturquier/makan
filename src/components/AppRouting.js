import React, { Component, Fragment } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import * as routes from '../constants/routes'
import Header from './Header/Header.component'
import Home from './Home/Home.component'
import Recipes from './Recipes/Recipes.component'
import Ingredients from './Ingredients/Ingredients.component'

export default class AppRouting extends Component {
	render() {
		return (
			<HashRouter>
				<Fragment>
					<Header/>
					<Switch>
						<Route exact path={routes.ROOT_PAGE} component={Home}/>
						<Route exact path={routes.SEARCH_RECIPES_BY_CATEGORIES} component={Recipes}/>
						<Route exact path={routes.SEARCH_RECIPES_BY_INGREDIENTS} component={Ingredients}/>
					</Switch>
				</Fragment>
			</HashRouter>
		)
	}
}
