import { Suspense, lazy } from 'react'

import { getCheckoutSession } from '@/app/lib/helpers'
import { SUCCESSFUL_PAYMENT_STATUS } from '@/app/lib/constants'

import ScrollToSections from './components/ScrollToSections'
import Form from './components/Form'
import BackgroundVideo from './components/BackgroundVideo'

const Sections = lazy(() => import('./components/Sections'))

const Home = async ({ searchParams }) => {
  const {
    birthday: queryBirthday,
    confirmationId,
    gender: queryGender,
  } = searchParams

  const { metadata, status } = await getCheckoutSession(confirmationId)

  const gender = queryGender || metadata?.gender
  const birthday = queryBirthday || metadata?.birthday

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <BackgroundVideo>
        <Form birthday={birthday} gender={gender} />
      </BackgroundVideo>
      {((gender && birthday) || confirmationId) && (
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToSections
            birthday={birthday}
            gender={gender}
            confirmationId={confirmationId}
          />
          <Sections
            birthday={birthday}
            gender={gender}
            paymentCompleted={status === SUCCESSFUL_PAYMENT_STATUS}
          />
        </Suspense>
      )}
    </main>
  )
}

export default Home
