import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Users from './user'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'

const client= new ApolloClient({
  link:createHttpLink({uri:'http://localhost:3000/graphql',}),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Users></Users>
    </ApolloProvider>
  </React.StrictMode>,
)
