import React from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

import './DirectorCard.css'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'space-between',
    width: 290,
    height: 550,
    margin: 10,
    position: 'sticky',
    left: 20,
    top: 70
  }
}))

function DirectorCard({
  directorData,
  handleDirectorChange,
  handleLoadImg,
  loading
}) {
  const match = useMediaQuery('(max-width: 945px)')
  const classes = useStyles()
  return (
    <Card className={match ? 'director-card' : classes.root}>
      <CardActionArea>
        <div className={loading ? 'loading' : 'noLoading'}>
          <CircularProgress color="primary" />{' '}
        </div>
        <CardMedia
          onLoad={handleLoadImg}
          component="img"
          alt="Film director"
          image={directorData.picture}
          title="Film director"
          className="imgScale"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {directorData.last_name + ' ' + directorData.first_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <p>Дата рождения: {directorData.birthday}</p>
            {directorData.death && <p>Дата смерти: {directorData.death}</p>}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {directorData.id ? (
          <div>
            <Button size="small" onClick={() => handleDirectorChange(false)}>
              Prev
            </Button>
            <Button size="small" onClick={() => handleDirectorChange(true)}>
              Next
            </Button>
          </div>
        ) : (
          <Button size="small">Learn More</Button>
        )}
      </CardActions>
    </Card>
  )
}

DirectorCard.propTypes = {
  directorData: PropTypes.object,
  handleDirectorChange: PropTypes.func.isRequired,
  handleLoadImg: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

DirectorCard.defaultProps = {
  directorData: {},
  loading: true
}

export default DirectorCard
