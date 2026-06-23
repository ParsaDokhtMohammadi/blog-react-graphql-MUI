import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import './styles/index.css'
import './styles/fonts.css'
import App from './App.jsx'
import { theme } from './mui/theme.js'
import { BrowserRouter } from 'react-router'



const { VITE_GRAPHQL_URI } = import.meta.env

const client = new ApolloClient({
  uri: VITE_GRAPHQL_URI,
  cache: new InMemoryCache()
})


createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
  
          <App />
     
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
)
