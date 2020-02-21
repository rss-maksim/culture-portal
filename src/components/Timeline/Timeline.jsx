import React from 'react'
import PropTypes, { string } from 'prop-types'
import {
  Timeline as TimelineComponent,
  TimelineItem
} from 'vertical-timeline-component-for-react'
import { capitalize } from '../../utils/utils'

// TODO: change colors according to style guide
const primaryColor = '#243665'
const complementaryColor = '#8BD8BD'
const filler = '#ddd'
const Timeline = ({ biography }) => (
  <TimelineComponent lineColor={filler}>
    {biography.map((event, index) => (
      <TimelineItem
        key={index}
        dateText={event.date}
        style={{ color: complementaryColor }}
        dateInnerStyle={{
          background: primaryColor,
          color: complementaryColor,
          'padding-left': '20px'
        }}
        bodyContainerStyle={{
          background: filler,
          color: primaryColor,
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.2rem rgba(0, 0, 0, 0.2)'
        }}
      >
        {capitalize(event.description)}
      </TimelineItem>
    ))}
  </TimelineComponent>
)
Timeline.propTypes = {
  biography: PropTypes.arrayOf(
    PropTypes.shape({
      date: string,
      description: string
    })
  ).isRequired
}

export default Timeline
