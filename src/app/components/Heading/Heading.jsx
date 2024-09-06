const Heading = () => {
  return (
    <div className="mt-12 flex max-w-[270px] flex-col items-center justify-center text-left md:mt-0 md:max-w-3xl md:text-center">
      <h1
        className="w-full bg-clip-text text-4xl text-transparent md:text-6xl"
        style={{
          backgroundImage:
            'linear-gradient(111.66deg, #FFFFFF 7.61%, #999999 64.21%)',
        }}
      >
        Meet yourself and unlock your potential
      </h1>
      <p className="mt-4 max-w-full font-light text-[#CDCFDF] md:max-w-md">
        Embark on a journey within, where self-discovery becomes the key to
        unlocking your boundless potential.
      </p>
    </div>
  )
}

export default Heading
