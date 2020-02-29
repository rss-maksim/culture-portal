import React from 'react'
import { Link } from 'gatsby'
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
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import './DirectorCard.css'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between',
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
  loading,
  isMain
}) {
  const match = useMediaQuery('(max-width: 945px)')
  const classes = useStyles()
  const { t } = useTranslation()
  const loadClasses = classNames({
    loading,
    noLoading: !loading
  })
  const mediaQueryClasses = classNames({
    'director-card': match
  })

  return (
    <Card className={mediaQueryClasses || classes.root}>
      <CardActionArea>
        <div className={loadClasses}>
          <CircularProgress color="primary" />{' '}
        </div>
        {isMain ? (
          <Typography gutterBottom variant="h5" component="h2" align="center">
            <p>{t('card.directorOfDay')}</p>
          </Typography>
        ) : null}
        <CardMedia
          onLoad={() => handleLoadImg(false)}
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
          {!isMain ? (
            <Typography variant="body2" color="textSecondary" component="div">
              <p>
                {t('card.birth')}: {directorData.birthday}
              </p>
              {directorData.death && (
                <p>
                  {t('card.die')}: {directorData.death}
                </p>
              )}
            </Typography>
          ) : null}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!isMain ? (
          <div>
            <Link to={`director/${handleDirectorChange(false)}`}>
              <Button size="small" onClick={() => handleLoadImg(true)}>
                <ArrowBackOutlinedIcon />
              </Button>
            </Link>
            <Link to={`director/${handleDirectorChange(true)}`}>
              <Button size="small" onClick={() => handleLoadImg(true)}>
                <ArrowForwardOutlinedIcon />
              </Button>
            </Link>
          </div>
        ) : (
          <Link to={`director/${directorData.id}`}>
            <Button size="small">{t('card.learn')}</Button>
          </Link>
        )}
      </CardActions>
    </Card>
  )
}

DirectorCard.propTypes = {
  directorData: PropTypes.object,
  handleDirectorChange: PropTypes.func,
  handleLoadImg: PropTypes.func,
  loading: PropTypes.bool
}

DirectorCard.defaultProps = {
  directorData: {},
  handleDirectorChange: null,
  handleLoadImg: null,
  loading: true
}

export default DirectorCard
