import { useQuery } from '@apollo/client'
import { GET_AUTHORS } from '../../graphql/queries'

const Authors = () => {

  const { loading, data, error } = useQuery(GET_AUTHORS)

  if  (loading) return <div>loading...</div>
  if (error) return <div>{error.message}</div>
  return (
    <div>
      authors
    </div>
  )
}

export default Authors
