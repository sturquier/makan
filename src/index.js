import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import App from './components/App'

const client = new ApolloClient({
	link: new HttpLink({
		uri: process.env.REACT_APP_GRAPHQL_API_URI
	}),
	cache: new InMemoryCache()
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>, 
	document.getElementById('root')
)
