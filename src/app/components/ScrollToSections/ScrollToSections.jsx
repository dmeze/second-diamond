'use client'

import { useEffect } from 'react'

const ScrollToSections = ({ birthday, gender, confirmationId }) => {
  useEffect(() => {
    const section = document.getElementById('sections')
    if (section && ((birthday && gender) || confirmationId)) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [birthday, gender, confirmationId])

  return null
}

export default ScrollToSections
