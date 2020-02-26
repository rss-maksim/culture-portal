import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes, { string } from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles(theme => ({
  root: {
    'min-width': '300px',
    margin: '20px'
  },
  media: {
    height: 0,
    paddingTop: '100%' // 16:9
  }
}))

export default function TeamMember({ member: { github, name, picture } }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={picture} />
      <CardHeader title={name} subheader={github} />
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
