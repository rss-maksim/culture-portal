import React from 'react'
import { List } from '@material-ui/core'
import { useStaticQuery, graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import TeamMember from '../components/TeamMember'
import { useTranslation } from 'react-i18next'
import App from '../components/app'

const TeamPage = () => {
  const { t } = useTranslation()
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
    <App>
      <SEO title="Members" />
      <h1>{t('team_page/members')}</h1>
      <p>{t('team_page/subtitle')}</p>
      <List style={flexContainer}>
        {members.map((member, index) => (
          <TeamMember member={member} key={index}></TeamMember>
        ))}
      </List>
      <Link to="/">Go back to the homepage</Link>
    </App>
  )
}
export default TeamPage
