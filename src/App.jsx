import { gql, useQuery } from '@apollo/client'
import './App.css'

function App() {


  const QUERY = gql`
    query {
      authors {
        name
      }
    }
  `

    const { loading, error, data } = useQuery(QUERY)

  if (loading) return <p>Loading...</p>
  console.log(data)
  return (
    <>
      hello world
    </>
  )
}

export default App
