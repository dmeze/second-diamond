'use client'

import { useEffect } from 'react'

const ScrollToSections = ({ searchParams }) => {
  useEffect(() => {
    const section = document.getElementById('sections')
    if (section && searchParams.birthday && searchParams.gender) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [searchParams.birthday, searchParams.gender])

  return null
}

export default ScrollToSections
