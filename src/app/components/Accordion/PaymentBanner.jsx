import { getPaymentLink } from '@/app/lib/helpers'

const PaymentBanner = async ({ birthday, gender }) => {
  const paymentLink = await getPaymentLink(birthday, gender)

  return (
    <div className="flex h-[70px] w-full items-center justify-between rounded-b-lg px-4">
      <span className="text-sm text-white">
        Ready to dive deeper into your true self? Unlock for just $7.99
      </span>
      <a
        href={paymentLink}
        className="ml-4 h-[40px] w-[100px] cursor-pointer rounded-md bg-white px-4 py-2 text-transparent"
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Explore
        </span>
      </a>
    </div>
  )
}

export default PaymentBanner
