import Image from 'next/image'

import {
  Brand,
  Family,
  Finances,
  Mission,
  Profile,
} from '../components/Icons/Icons'

export const sectionsList = [
  {
    icon: <Profile />,
    title: 'Your Social Orbit',
    isOpenInitialState: true,
    content: (
      <>
        <div className="relative my-3.5 aspect-[1/1] max-h-[595px] w-full">
          <Image
            src="/youAndTheWorld.png"
            alt="World Illustration"
            fill
            className="object-cover"
          />
        </div>
        <p className="pb-14 text-sm font-light text-white">
          Embark on a journey within, where self-discovery becomes the key to
          unlocking your boundless potential. Meet yourself in the mirror of
          introspection, embracing strengths, conquering fears, and sculpting
          the path to personal greatness. Unleash the power within, for in
          self-awareness lies the gateway to realizing your true capabilities.
        </p>
      </>
    ),
  },
  {
    icon: <Mission />,
    title: 'Mission',
    content: (
      <>
        <div className="relative my-3.5 aspect-[4/4] w-full">
          <Image
            src="/youAndTheWorld.png"
            alt="World Illustration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <p className="pb-14 text-sm font-light text-white">
          Embark on a journey within, where self-discovery becomes the key to
          unlocking your boundless potential. Meet yourself in the mirror of
          introspection, embracing strengths, conquering fears, and sculpting
          the path to personal greatness. Unleash the power within, for in
          self-awareness lies the gateway to realizing your true capabilities.
        </p>
      </>
    ),
  },
  {
    icon: <Finances />,
    title: 'Finances',
    content: (
      <>
        <div className="relative my-3.5 aspect-[4/4] w-full">
          <Image
            src="/youAndTheWorld.png"
            alt="World Illustration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <p className="pb-14 text-sm font-light text-white">
          Embark on a journey within, where self-discovery becomes the key to
          unlocking your boundless potential. Meet yourself in the mirror of
          introspection, embracing strengths, conquering fears, and sculpting
          the path to personal greatness. Unleash the power within, for in
          self-awareness lies the gateway to realizing your true capabilities.
        </p>
      </>
    ),
  },
  {
    icon: <Brand />,
    title: 'You as a personal brand',
    content: (
      <>
        <div className="relative my-3.5 aspect-[4/4] w-full">
          <Image
            src="/youAndTheWorld.png"
            alt="World Illustration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <p className="pb-14 text-sm font-light text-white">
          Embark on a journey within, where self-discovery becomes the key to
          unlocking your boundless potential. Meet yourself in the mirror of
          introspection, embracing strengths, conquering fears, and sculpting
          the path to personal greatness. Unleash the power within, for in
          self-awareness lies the gateway to realizing your true capabilities.
        </p>
      </>
    ),
  },
  {
    icon: <Family />,
    title: 'Family and kids',
    content: (
      <>
        <div className="relative my-3.5 aspect-[4/4] w-full">
          <Image
            src="/youAndTheWorld.png"
            alt="World Illustration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <p className="pb-14 text-sm font-light text-white">
          Embark on a journey within, where self-discovery becomes the key to
          unlocking your boundless potential. Meet yourself in the mirror of
          introspection, embracing strengths, conquering fears, and sculpting
          the path to personal greatness. Unleash the power within, for in
          self-awareness lies the gateway to realizing your true capabilities.
        </p>
      </>
    ),
  },
]
