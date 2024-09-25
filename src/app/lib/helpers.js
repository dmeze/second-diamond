import { headers } from 'next/headers'

import personalityMain from '@/app/lib/texts/personality_main.json'
import hiddenPulse from '@/app/lib/texts/hidden_pulse.json'
import innerFlame from '@/app/lib/texts/inner_flame.json'
import hiddenPower from '@/app/lib/texts/hidden_power.json'
import missionMain from '@/app/lib/texts/mission_main.json'
import guidingLight from '@/app/lib/texts/guiding_light.json'
import livePurpose from '@/app/lib/texts/live_purpose.json'
import experienceFile from '@/app/lib/texts/experience.json'
import relationship from '@/app/lib/texts/relationship.json'
import wealthWhispers from '@/app/lib/texts/wealth_whispers.json'
import gidGuide from '@/app/lib/texts/gid_guide.json'
import loveAndCashFlow from '@/app/lib/texts/love_and_cash_flow.json'
import brandEssentials from '@/app/lib/texts/brand_essentials.json'
import brandLost from '@/app/lib/texts/brand_lost.json'

export const getAdditionalNumbers = (birthDate) => {
  const [year, month, day] = birthDate.split('-')

  const digits = [...year, ...month, ...day].map(Number)
  const firstAdditional = digits.reduce((acc, digit) => acc + digit, 0)

  const secondAdditional = String(firstAdditional)
    .split('')
    .map(Number)
    .reduce((acc, digit) => acc + digit, 0)

  const dayDigits = day.split('').map(Number)
  const firstDigitODday = dayDigits[0] === 0 ? dayDigits[1] : dayDigits[0]
  const thirdAdditional = firstAdditional - 2 * firstDigitODday

  const fourthAdditional = String(thirdAdditional)
    .split('')
    .map(Number)
    .reduce((acc, digit) => acc + digit, 0)

  const additionalDigits = [
    ...String(firstAdditional),
    ...String(secondAdditional),
    ...String(thirdAdditional),
    ...String(fourthAdditional),
  ]

  const allDigits = [...year, ...month, ...day, ...additionalDigits]

  const countOfOnes =
    allDigits.reduce((acc, digit) => acc + (digit === '1' ? 1 : 0), 0) || 1
  const countOfTwos =
    allDigits.reduce((acc, digit) => acc + (digit === '2' ? 1 : 0), 0) || 1

  return {
    additionalNumbers: `${firstAdditional}.${secondAdditional}.${thirdAdditional}.${fourthAdditional}`,
    countOfOnes: countOfOnes > 6 ? 6 : countOfOnes,
    countOfTwos: countOfTwos > 4 ? 4 : countOfTwos,
  }
}

const reduceIfNeeded = (num) => {
  if (num > 22) {
    return String(num)
      .split('')
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0)
  }
  return num
}

export const getMainNumbers = (birthDate) => {
  const [year, month, day] = birthDate.split('-')

  // 1. "A" - day of birth or sum of digits if greater than 22
  let A = parseInt(day, 10)
  A = reduceIfNeeded(A)

  // 2. "B" - month of birth
  const B = parseInt(month, 10)

  // 3. "C" - sum of all digits of the year, and reduced if greater than 22
  const C = reduceIfNeeded(
    year.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0),
  )

  const D = reduceIfNeeded(A + B + C)

  const E = reduceIfNeeded(A + B + C + D)

  const F = reduceIfNeeded(A + B)

  const G = reduceIfNeeded(B + C)

  const H = reduceIfNeeded(C + D)

  const K = reduceIfNeeded(D + A)
  const X = reduceIfNeeded(F + G + H + K)
  const Z = reduceIfNeeded(E + X)

  const P = reduceIfNeeded(D + E)
  const W = reduceIfNeeded(P + D)
  const experience = `${D}-${W}-${P}`
  const experienceAlt = `${P}-${W}-${D}`

  const R = reduceIfNeeded(C + E)

  const T = reduceIfNeeded(D + E)

  const Y = reduceIfNeeded(R + T)

  const U = reduceIfNeeded(Y + R)

  const S = reduceIfNeeded(Y + T)

  return {
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    K,
    X,
    R,
    T,
    Y,
    U,
    S,
    Z,
    experience,
    experienceAlt,
  }
}

export const getAccordionContentText = ({
  fileKey,
  isShort,
  textKey,
  altKey,
  altTextKey,
}) => {
  const textType = isShort ? 'short' : 'all'
  const files = {
    personalityMain,
    hiddenPulse,
    innerFlame,
    hiddenPower,
    missionMain,
    guidingLight,
    livePurpose,
    relationship,
    wealthWhispers,
    gidGuide,
    loveAndCashFlow,
    brandEssentials,
    brandLost,
    experience: experienceFile,
  }
  const textByFile = files[fileKey]

  if (textByFile) {
    const textByKey =
      textKey in textByFile ? textByFile[textKey] : textByFile[altTextKey]

    return textByKey[textType] || textByKey[altKey][textType]
  }

  return ''
}

export const getPaymentLink = async (birthday, gender) => {
  const headersList = headers()
  const referer = headersList.get('referer')
  const url = new URL(referer)
  const { origin } = url

  const response = await fetch('https://api.stripe.com/v1/payment_links', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'line_items[0][price]': process.env.STRIPE_PRODUCT_ID,
      'line_items[0][quantity]': '1',
      'metadata[birthday]': birthday,
      'metadata[gender]': gender,
      'after_completion[type]': 'redirect',
      'after_completion[redirect][url]': `${origin}?confirmationId={CHECKOUT_SESSION_ID}`,
    }),
  })

  const { url: paymentLink } = (await response.json()) || {}

  return paymentLink
}

export const getCheckoutSession = async (confirmationId) => {
  if (confirmationId) {
    const response = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${confirmationId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    )

    return response.json()
  }

  return {}
}
