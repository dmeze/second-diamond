'use client'

import { useState } from 'react'

import { ArrowDown, ArrowUp } from '../Icons/Icons'

const Accordion = ({
  title,
  icon,
  content,
  isOpenInitialState = false,
  shouldPay = true,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenInitialState)

  const handleAccordionClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="mb-1.5 max-h-min w-full overflow-hidden rounded-xl bg-[#282828]">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between bg-[#181818] p-4 text-white"
        onClick={handleAccordionClick}
      >
        <div className="flex items-center space-x-2">
          <span className="text-pink-500">{icon}</span>
          <h2 className="text-lg font-light">{title}</h2>
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
        <div className="rounded-b-lg bg-[#282828] px-4">{content}</div>
        {shouldPay && (
          <div className="flex h-[70px] w-full items-center justify-between rounded-b-lg px-4">
            <span className="text-sm text-white">
              Ready to dive deeper into your true self? Unlock for just $7.99
            </span>
            <button
              type="button"
              className="h-[40px] w-[100px] rounded-md bg-white px-4 py-2 text-transparent"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Explore
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordion
