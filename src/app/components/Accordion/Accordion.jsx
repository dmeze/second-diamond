'use client'

import { useState, useCallback } from 'react'

import { ArrowDown, ArrowUp } from '../Icons/Icons'

const debounce = (func, delay) => {
  let timeout
  return (...args) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

const Accordion = ({ title, icon, children, isOpenInitialState = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitialState)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleAccordionClick = useCallback(
    debounce(() => {
      setIsOpen((prev) => !prev)
    }, 100),
    [],
  )

  return (
    <div className="mb-1.5 max-h-min w-full overflow-hidden rounded-xl bg-[#282828]">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between bg-[#181818] p-4 text-white"
        onClick={handleAccordionClick}
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-2">
          <span className="text-pink-500">{icon}</span>
          <h2 className="text-left text-lg font-light">{title}</h2>
        </div>
        <span className="text-gray-300">
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </span>
      </button>
      <div
        className={`
            transition-max-height bg-gradient-to-r 
            from-[#CF4B92] to-[#523CC7] duration-500 
            ease-in-out ${isOpen ? 'max-h-min' : 'max-h-0 overflow-hidden'}
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default Accordion
