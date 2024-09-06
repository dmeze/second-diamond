const BackgroundImage = ({ children }) => {
  return (
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
      <div className="flex h-full justify-center md:items-center">
        {children}
      </div>
    </div>
  )
}

export default BackgroundImage
