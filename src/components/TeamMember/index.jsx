import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes, { string } from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import { withStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '250px',
    margin: '20px'
  },
  media: {
    height: 0,
    paddingTop: '100%'
  }
}))
const StyledCardHeader = withStyles({
  title: {
    'font-size': '1em'
  },
  subheader: {
    'font-size': '0.8em',
    'overflow-wrap': 'break-word'
  }
})(CardHeader)

export default function TeamMember({ member: { github, name, picture } }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={picture} />
      <StyledCardHeader title={name} subheader={github.split('/').pop()} />
      <CardActions disableSpacing>
        <IconButton href={github}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

TeamMember.propTypes = {
  member: PropTypes.shape({
    github: string,
    name: string,
    picture: string
  }).isRequired
}
