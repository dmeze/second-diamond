'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const BackgroundVideo = ({ children }) => {
  const videoRef = useRef(null)
  const [isLowPowerMode, setIsLowPowerMode] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      const promise = videoRef.current.play()
      promise.catch(() => {
        setIsLowPowerMode(true)
      })
    }
  }, [])

  return (
    <div className="relative h-screen w-full">
      <div className="absolute left-0 top-0 -z-10 size-full">
        {!isLowPowerMode ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            ref={videoRef}
            className="pointer-events-none absolute left-0 top-0 size-full object-cover"
          >
            <source src="/background.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src="/backgroundImage.png"
            alt="Background Image"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex size-full items-center justify-center gap-16 md:px-12">
        <div className="relative flex justify-center  ">
          <div className="absolute -right-1/2 top-[-175%] flex size-[800px] items-center justify-center md:right-auto">
            <Image
              src="/circle.png"
              alt="Circular Background"
              fill
              priority
              sizes="(max-width: 768px) 100vw"
              className="object-cover opacity-40 md:opacity-60"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default BackgroundVideo
