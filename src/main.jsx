import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import './styles/index.css'
import './styles/fonts.css'
import App from './App.jsx'
import { theme } from './mui/theme.js'

const client = new ApolloClient({
  uri: "https://ap-south-1.cdn.hygraph.com/content/cmq6u6gua001v06uunyvc0meu/master",
  cache: new InMemoryCache()
})


createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
)
