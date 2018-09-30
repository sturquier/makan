import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import Recipes from './Recipes/Recipes'
import Ingredients from './Ingredients/Ingredients'

export default class AppRouting extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/recipes" component={Recipes}/>
					<Route exact path="/ingredients" component={Ingredients}/>
				</Switch>
			</HashRouter>
		)
	}
}
