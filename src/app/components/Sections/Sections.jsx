import { lazy, Suspense } from 'react'

import {
  MEET_YOURSELF_DESCRIPTION,
  MEET_YOURSELF_TITLE,
} from '@/app/components/Sections/constants'
import AccordionContent from '@/app/components/Accordion/AccordionContent'

import { accordionsList } from '../../lib/constants'
import Accordion from '../Accordion'

const PaymentBanner = lazy(
  () => import('@/app/components/Accordion/PaymentBanner'),
)

const Sections = async (props) => (
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
        {MEET_YOURSELF_TITLE}
      </h1>
      <p className="font-light text-[#CDCFDF] md:max-w-[80%] md:text-2xl">
        {MEET_YOURSELF_DESCRIPTION}
      </p>
    </div>
    <div className="flex-1">
      {accordionsList.map((accordionItems) => (
        <Accordion key={accordionItems.title} {...accordionItems}>
          <AccordionContent
            contentList={accordionItems.contentList}
            {...props}
          />
          <Suspense fallback={<div>Loading...</div>}>
            {!props.paymentCompleted && <PaymentBanner {...props} />}
          </Suspense>
        </Accordion>
      ))}
    </div>
  </div>
)

export default Sections
