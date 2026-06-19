import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './index.css'
import App from './App.jsx'

const client = new ApolloClient({
  uri : "https://ap-south-1.cdn.hygraph.com/content/cmq6u6gua001v06uunyvc0meu/master",
  cache : new InMemoryCache()
})


createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
