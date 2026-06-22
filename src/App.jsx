import { Route, Routes } from 'react-router'
import HomePage from './components/home/HomePage'
import Header from './components/Layout/Header'
import Layout from './components/Layout/Index'
import AuthorPage from './components/author/AuthorPage'
import BlogPage from './components/blog/BlogPage'


function App() {



  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authors/:authorSlug" element={<AuthorPage />} />
        <Route path="/blogs/:blogSlug" element={<BlogPage />} />
      </Routes>
    </Layout>
  )
}

export default App
