'use client'

import Image from 'next/image'

const BackgroundVideo = ({ children }) => (
  <div className="relative h-screen w-full">
    <div className="absolute left-0 top-0 -z-10 size-full">
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 size-full object-cover"
      >
        <source src="/background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="flex size-full items-center justify-center gap-16 px-12">
      <div className="relative flex justify-center  ">
        <div className="absolute right-[-60%] top-[-175%] flex size-[800px] items-center justify-center md:right-auto">
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

export default BackgroundVideo
