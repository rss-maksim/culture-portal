import { graphql, useStaticQuery } from 'gatsby'

const getQueryDataDirectors = () => {
  const query = useStaticQuery(graphql`
    query MyQuery {
      allDirectorsJson(filter: {}) {
        nodes {
          directors {
            id
            last_name
            first_name
            picture
            death
            birthday
            coordinates
            video
            biography {
              date
              description
            }
            works {
              date
              name
            }
            gallery
          }
        }
      }
    }
  `)
  return query.allDirectorsJson.nodes[0]
}

export default getQueryDataDirectors
