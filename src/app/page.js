import { sectionsList } from './lib/constants'
import Accordion from './components/Accordion'
import ScrollToSections from './components/ScrollToSections'
import Heading from './components/Heading'
import Form from './components/Form'
import BackgroundVideo from './components/BackgroundVideo'

const Home = ({ searchParams }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundVideo>
        <div className="flex w-full flex-col gap-20 px-6 md:items-center">
          <Heading />
          <Form searchParams={searchParams} />
        </div>
      </BackgroundVideo>
      <ScrollToSections searchParams={searchParams} />
      {searchParams.gender && searchParams.birthday && (
        <div
          id="sections"
          className="flex w-full flex-col justify-between gap-6 bg-black p-6 md:flex-row md:gap-0 md:p-20"
        >
          <div className="flex flex-1 flex-col text-left">
            <h1
              className="w-full bg-clip-text text-3xl text-transparent md:text-6xl"
              style={{
                backgroundImage:
                  'linear-gradient(111.66deg, #FFFFFF 7.61%, #999999 64.21%)',
              }}
            >
              Your Social Orbit
            </h1>
            <p className="mt-4 max-w-full text-sm font-light text-[#CDCFDF] md:max-w-[60%]">
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

export default Home
