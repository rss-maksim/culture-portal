import React from 'react'
import { List } from '@material-ui/core'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TeamMember from '../components/TeamMember'

const TeamPage = () => {
  const data = useStaticQuery(graphql`
    {
      allTeamJson {
        nodes {
          members {
            github
            picture
            name
          }
        }
      }
    }
  `)
  const [members] = data.allTeamJson.nodes.map(node => node.members)
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    'flex-wrap': 'wrap',
    'justify-content': 'space-around',
    padding: 0
  }
  // eslint-disable-next-line array-bracket-spacing

  return (
    <>
      <Layout>
        <SEO title="Members" />
        <h1>Members</h1>
        <p>Wanted dead or alive</p>
        <List style={flexContainer}>
          {members.map((member, index) => (
            <TeamMember member={member} key={index}></TeamMember>
          ))}
        </List>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </>
  )
}
export default TeamPage
