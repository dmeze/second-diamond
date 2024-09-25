'use client'

import { useEffect } from 'react'

const smoothScroll = (target, duration) => {
  if (!target) return

  const targetPosition = target.getBoundingClientRect().top + window.scrollY
  const startPosition = window.scrollY
  const distance = targetPosition - startPosition
  let startTime = null

  const ease = (t, b, c, d) => {
    let time = t / (d / 2)
    if (time < 1) return (c / 2) * time * time + b
    // eslint-disable-next-line no-plusplus
    time--
    return (-c / 2) * (time * (time - 2) - 1) + b
  }

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  requestAnimationFrame(animation)
}

const ScrollToSections = ({ birthday, gender, confirmationId }) => {
  useEffect(() => {
    const section = document.getElementById('sections')
    if (section && ((birthday && gender) || confirmationId)) {
      smoothScroll(section, 2000)
    }
  }, [birthday, gender, confirmationId])

  return null
}

export default ScrollToSections
