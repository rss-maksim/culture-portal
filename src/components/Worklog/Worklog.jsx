import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '30px 10px',
    flexGrow: 1
  },
  header: {
    textAlign: 'center',
    fontSize: 22,
    margin: '10px auto'
  },
  card: {
    margin: theme.spacing(1)
  },
  spent: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: 1
  },
  feature: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    flex: 9,
    marginLeft: 20
  }
}))
const Worklog = () => {
  const [expanded, setExpanded] = React.useState('')
  const handleChange = panel => (event, isExpanded) =>
    setExpanded(isExpanded ? panel : false)
  const { t } = useTranslation()
  const classes = useStyles()
  const worklog = useStaticQuery(graphql`
    {
      dataJson {
        vzanimonets {
          github
          name
          log {
            feature
            spent
          }
        }
        truhin_andrei {
          github
          name
          log {
            feature
            spent
          }
        }
        spirithntr {
          github
          name
          log {
            feature
            spent
          }
        }
        rss_maksim {
          github
          name
          log {
            feature
            spent
          }
        }
        OrionT {
          github
          name
          log {
            feature
            spent
          }
        }
      }
    }
  `)
  const { dataJson: persons } = worklog

  return (
    <Grid className={classes.root}>
      <h4 className={classes.header}>{t('worklog')}</h4>
      {Object.values(persons).map(person => (
        <ExpansionPanel
          expanded={expanded === person.github}
          onChange={handleChange(person.github)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${person}-content`}
            id={`${person}-header`}
          >
            <Typography className={classes.heading}>
              {person.name} ({person.github})
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container direction="row">
              {person.log.map(({ feature, spent }) => (
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Typography className={classes.spent}>{spent}</Typography>
                  <Typography className={classes.feature}>{feature}</Typography>
                </Grid>
              ))}
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Grid>
  )
}

export default Worklog
