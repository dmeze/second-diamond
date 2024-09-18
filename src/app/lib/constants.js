import {
  Brand,
  Finances,
  Mission,
  Profile,
  Relationship,
} from '../components/Icons/Icons'

export const SUCCESSFUL_PAYMENT_STATUS = 'complete'

export const MISSION_DEFAULT_TEXT =
  'Your life’s purpose acts as your internal compass, steering you toward your ultimate destination—whether it’s spiritual growth, mental clarity, creative expression, or physical well-being. It’s more than just finding a purpose; it’s about transforming into the best version of yourself. This journey is about more than self-betterment; it’s about mastering your mindset, embracing positivity, and cultivating love and acceptance.'
export const NAVIGATING_LIFE_PURPOSE_DEFAULT_TEXT =
  'Think of this energy as the big picture guide for your journey through life, particularly when it comes to how you navigate the social world and your soul’s growth. It’s not just about what you’re doing right now; it’s about how your current path aligns with your deeper, spiritual mission. This purpose is about making sure you’re living authentically, using your unique talents, and engaging with the world in a way that’s true to who you are. It’s your blueprint for making a real impact, both in your personal life and on a broader scale.'
export const RELATIONSHIP_DEFAULT_TEXT =
  'Ready to crack the code of your love life? Our relationship insights will help you figure out what makes you tick in love, and more importantly, who’s worth swiping right for! Whether you’re chasing butterflies or seeking that happily-ever-after, this section dives into the numerological secrets that guide you toward long-lasting, drama-free relationships. We’re talking mutual respect, real understanding, and loads of love. Let’s decode your love story and make sure you’re writing the right one!\n\n'
export const FINANCES_DEFAULT_TEXT =
  'Ready to decode your money mojo? "Money Vibes" is here to turn your financial fate into something you can actually work with. We dive deep into your financial DNA to uncover your hidden talents, the best ways for you to rake in the cash, and those pesky blocks that might be messing with your flow. Whether you’re curious about the career paths that’ll make you shine or just want to figure out why your wallet always feels a little too light, we\'ve got the insights you need. Let’s get you in sync with the energy of money, so you can start stacking up those coins with confidence and clarity.'
export const BRAND_DEFAULT_TEXT =
  'Ready to level up your social game? Let’s take your numerology vibes and turn them into pure social media magic. We’re talking about creating content that’s so you, it practically writes itself! Discover the themes that’ll get your followers double-tapping, figure out what’s worth posting, and learn how to harness your cosmic energy to go viral. It’s time to turn your astrological awesomeness into online stardom. Get ready to blow up the feed—numerology style!'

export const accordionsList = [
  {
    icon: <Profile />,
    title: 'Your Social Orbit',
    isOpenInitialState: true,
    contentList: [
      {
        id: 'personality_main',
        fileKey: 'personalityMain',
        textKey: 'A',
        altKeyByGender: true,
        imageSrc: '/yourSocialOrbit.png',
        imageAlt: 'World Illustration',
      },
      {
        id: 'hidden_pulse',
        fileKey: 'hiddenPulse',
        textKey: 'countOfOnes',
        title: 'The hidden pulse',
      },
      {
        id: 'inner_flame',
        fileKey: 'innerFlame',
        textKey: 'countOfTwos',
        title: 'Inner Flame or Hidden Energy',
      },
      {
        id: 'hidde_power',
        fileKey: 'hiddenPower',
        textKey: 'countOfTwos',
        title: 'Unleashing Hidden Power',
      },
    ],
  },
  {
    icon: <Mission />,
    title: 'Destiny Decoded: Your Journey to Greatness',
    contentList: [
      {
        id: 'mission_default',
        defaultText: MISSION_DEFAULT_TEXT,
        imageSrc: '/mission.png',
        imageAlt: 'Your Mission',
      },
      {
        id: 'mission_main',
        fileKey: 'missionMain',
        textKey: 'E',
      },
      {
        id: 'guiding_Light',
        fileKey: 'guidingLight',
        textKey: 'X',
        title: 'The Guiding Light of Your Life',
      },
      {
        id: 'live_purpose',
        defaultText: NAVIGATING_LIFE_PURPOSE_DEFAULT_TEXT,
        fileKey: 'livePurpose',
        textKey: 'Z',
        title: 'Navigating Life’s Purpose',
      },
      {
        id: 'experience',
        afterPayment: true,
        fileKey: 'experience',
        textKey: 'experience',
        altTextKey: 'experienceAlt',
        title: 'Experience from previous life',
      },
    ],
  },
  {
    icon: <Relationship />,
    title: 'Love Numbers: Decode Your Romance DNA',
    contentList: [
      {
        id: 'relationship_main',
        defaultText: RELATIONSHIP_DEFAULT_TEXT,
        imageSrc: '/relationship.png',
        imageAlt: 'Relationship',
        fileKey: 'relationship',
        textKey: 'S',
      },
    ],
  },
  {
    icon: <Finances />,
    title: 'Money Vibes: Your Cash Flow Compass',
    contentList: [
      {
        id: 'finances_default',
        defaultText: FINANCES_DEFAULT_TEXT,
        imageSrc: '/finances.png',
        imageAlt: 'Finances',
      },
      {
        id: 'wealth_whispers',
        title: 'Wealth Whispers - Your the key to your financial growth',
        fileKey: 'wealthWhispers',
        textKey: 'U',
      },
      {
        id: 'gid_guide',
        title: 'Gig Guide- Your Numeric Ticket to Career Bliss',
        fileKey: 'gidGuide',
        textKey: 'R',
        altKeyByGender: true,
      },
      {
        id: 'love_and_cash_flow',
        title: 'Love & Cash Flow: Finding Your Perfect Balance',
        defaultText:
          'It’s all about harmonizing your relationships with your financial goals:',
        fileKey: 'loveAndCashFlow',
        textKey: 'Y',
      },
    ],
  },
  {
    icon: <Brand />,
    title: 'Social Mastery: Your Blueprint to Going Viral',
    contentList: [
      {
        id: 'brand_default',
        defaultText: BRAND_DEFAULT_TEXT,
        imageSrc: '/brand.png',
        imageAlt: 'Brand',
      },
      {
        id: 'brand_essentials',
        title: 'Personal Brand Essentials',
        fileKey: 'brandEssentials',
        textKey: 'B',
      },
      {
        id: 'your_superpower',
        title: 'Your Superpower',
        fileKey: 'brandEssentials',
        textKey: 'C',
      },
      {
        id: 'brand_lost',
        title: 'Lost in Translation No-Nos',
        fileKey: 'brandLost',
        textKey: 'D',
      },
    ],
  },
]
