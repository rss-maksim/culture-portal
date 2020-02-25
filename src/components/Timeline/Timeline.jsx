import React from 'react'
import PropTypes, { string } from 'prop-types'
import {
  Timeline as TimelineComponent,
  TimelineItem
} from 'vertical-timeline-component-for-react'
import { capitalize } from '../../utils'
import { useTheme } from '@material-ui/core/styles'

const Timeline = ({ biography }) => {
  const {
    palette: { primary, secondary, grey }
  } = useTheme()
  const itemStyle = { color: primary.main }
  const dateStyle = {
    background: primary.main,
    color: primary.contrastText,
    paddingLeft: '20px'
  }
  const bodyStyle = {
    background: grey[300],
    color: primary.main,
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0.2rem rgba(0, 0, 0, 0.2)'
  }
  return (
    <TimelineComponent lineColor={grey[300]}>
      {biography.map((event, index) => (
        <TimelineItem
          key={index}
          dateText={event.date}
          style={itemStyle}
          dateInnerStyle={dateStyle}
          bodyContainerStyle={bodyStyle}
        >
          {capitalize(event.description)}
        </TimelineItem>
      ))}
    </TimelineComponent>
  )
}
Timeline.propTypes = {
  biography: PropTypes.arrayOf(
    PropTypes.shape({
      date: string,
      description: string
    })
  ).isRequired
}

export default Timeline
