import { redirect } from 'next/navigation'
import Image from 'next/image'

import { sectionsList } from '../lib/constants'
import Accordion from '../components/Accordion'
import ScrollToSections from '../components/ScrollToSections'
import BackgroundVideo from '../components/BackgroundVideo'

const Test = ({ searchParams }) => {
  const action = async (formData) => {
    'use server'

    const gender = formData.get('gender')
    const birthday = formData.get('birthday')

    redirect(`/test?gender=${gender}&birthday=${birthday}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundVideo>
        <div className="relative flex w-full flex-col items-center justify-center gap-16 px-12">
          <div className="absolute right-[-20%] top-10 flex size-[800px] items-center justify-center md:right-auto md:top-[-175%]">
            <Image
              src="/circle.png"
              alt="Circular Background"
              fill
              className="object-cover opacity-40 md:opacity-100"
            />
          </div>
          <form
            action={action}
            className="relative z-10 flex w-full flex-col items-center gap-10 md:w-[370px]"
          >
            <div className="flex w-full items-center rounded-full border-[5px] border-black md:gap-2">
              <div className="relative flex-1">
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  defaultValue={searchParams?.birthday}
                  required
                  max={new Date().toISOString().split('T')[0]}
                  className="
            peer h-[60px] w-full
            rounded-full border-[0.6px] border-solid
            border-slate-600 bg-transparent p-2 px-3
            text-transparent transition-all
            valid:text-white focus:border-[#CF4B92] focus:text-white
            focus:outline-none
            "
                  style={{
                    background: 'rgba(255, 255, 255, 0.01)',
                    backdropFilter: 'blur(1px)',
                  }}
                />
                <label
                  htmlFor="birthday"
                  className="
            absolute left-2.5 top-7 w-full -translate-y-1/2
            scale-100 text-sm text-[#CDCFDF] transition-all
            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
            peer-valid:-translate-x-10 peer-valid:-translate-y-14
            peer-valid:scale-75 peer-focus:-translate-x-10 peer-focus:-translate-y-14
            peer-focus:scale-75 md:text-[17px]
            "
                >
                  Enter Your Birthday
                </label>
              </div>
              <div
                className="inline-flex space-x-2 rounded-full p-1"
                style={{
                  background: 'rgba(255, 255, 255, 0.09)',
                  backdropFilter: 'blur(1px)',
                }}
              >
                {['M', 'F', 'N'].map((item) => (
                  <div key={item}>
                    <input
                      type="radio"
                      name="gender"
                      value={item}
                      id={item}
                      defaultChecked={
                        item === searchParams.gender || item === 'M'
                      }
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={item}
                      className="flex size-[51px] cursor-pointer items-center justify-center rounded-[20px] border border-black text-black transition-colors peer-checked:!bg-white"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="h-[67px] w-full rounded-full bg-gradient-to-r from-[#CF4B92] to-[#523CC7] px-8 py-2 font-['Jeju'] text-4xl text-white opacity-85 md:w-[353px] md:opacity-100"
            >
              Explore
            </button>
          </form>
        </div>
      </BackgroundVideo>
      <ScrollToSections searchParams={searchParams} />
      {searchParams.gender && searchParams.birthday && (
        <div
          id="sections"
          className="flex w-full flex-col justify-between gap-[50px] bg-black p-5 md:flex-row md:p-20"
        >
          <div className="flex max-w-[90%] flex-1 flex-col text-left">
            <h1
              className="w-full bg-clip-text pb-14 text-center text-3xl text-transparent md:max-w-[80%] md:text-6xl"
              style={{
                backgroundImage:
                  'linear-gradient(111.66deg, #FFFFFF 7.61%, #999999 64.21%)',
              }}
            >
              Meet yourself and unlock your potential
            </h1>
            <p className="font-light text-[#CDCFDF] md:max-w-[80%] md:text-2xl">
              Embark on a journey within, where self-discovery becomes the key
              to unlocking your boundless potential. Meet yourself in the mirror
              of introspection, embracing strengths, conquering fears, and
              sculpting the path to personal greatness. Unleash the power
              within, for in self-awareness lies the gateway to realizing your
              true capabilities.
            </p>
          </div>
          <div className="flex-1">
            {sectionsList.map((props) => (
              <Accordion key={props.title} {...props} />
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default Test
