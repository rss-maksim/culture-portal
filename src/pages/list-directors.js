import React from 'react'
import { List } from '@material-ui/core'
import { useStaticQuery, graphql, Link } from 'gatsby'
import DirectorListItem from '../components/DirectorListItem'
import SEO from '../components/seo'
import SearchBar from '../components/SearchBar'
import { makeStyles } from '@material-ui/core/styles'
import App from './../components/app'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0',
    '&>div:hover': { backgroundColor: '#eee' },
    '&>div:nth-child(odd) a': { backgroundColor: '#424242' },
    '&>div:nth-child(even) a': { backgroundColor: '#303030' }
  }
}))
const DirectorsPage = () => {
  const classes = useStyles()
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
  const getFiltered = value =>
    directorsArr.filter(
      item =>
        item.first_name
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        item.last_name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
  const filterDirectors = value => {
    const filtered = getFiltered(value)
    setSearchResults(filtered)
  }

  return (
    <App>
      <SEO title="Directors" />
      <h1>Directors</h1>
      <p>Welcome to Directors page</p>
      <SearchBar sortFunc={filterDirectors} />
      <List className={classes.root}>
        {searchResults.map((director, index) => (
          <DirectorListItem
            directorData={director}
            key={index}
          ></DirectorListItem>
        ))}
      </List>
      <Link to="/">Go back to the homepage</Link>
    </App>
  )
}
DirectorsPage.defaultProps = {
  props: {}
}
export default DirectorsPage
