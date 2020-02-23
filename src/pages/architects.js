import { List } from '@material-ui/core'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import DirectorListItem from '../components/DirectorListItem'
import SEO from '../components/seo'
import SearchBar from '../components/SearchBar'

const DirectorsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allDirectorsJson {
        nodes {
          directors {
            id
            first_name
            last_name
          }
        }
      }
    }
  `)
  const [directorsArr] = data.allDirectorsJson.nodes.map(node => node.directors)
  const [searchResults, setSearchResults] = React.useState(directorsArr)
  const filterDirectors = value => {
    const filteredDirectorsArr = directorsArr.filter(
      item =>
        item.first_name
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        item.last_name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
    setSearchResults(filteredDirectorsArr)
  }

  return (
    <>
      <Layout>
        <SEO title="Directors" />
        <h1>Directors</h1>
        <p>Welcome to Directors page</p>
        <SearchBar sortFunc={filterDirectors} />
        <List>
          {searchResults.map((director, index) => (
            <DirectorListItem
              directorData={director}
              key={index}
            ></DirectorListItem>
          ))}
        </List>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </>
  )
}
export default DirectorsPage
