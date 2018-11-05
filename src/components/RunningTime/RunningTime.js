import React from 'react'
import clockIcon from '../../images/time_icon.svg'
import PropTypes from 'prop-types'
import styles from './RunningTime.module.scss'

const RunningTime = ({duration}) => {
  return (
    <span className={styles.container}>
        <img src={clockIcon} alt="mała ikona zegara"/>
        <span className={styles.duration}>{parseInt(duration / 60)} min.</span>
    </span>
  )
}

RunningTime.propTypes = {
  duration: PropTypes.number,
}

export default RunningTime
