import Image from 'next/image'

import {
  getAccordionContentText,
  getAdditionalNumbers,
  getMainNumbers,
} from '@/app/lib/helpers'

const AccordionContent = ({
  contentList,
  birthday,
  gender,
  paymentCompleted,
}) => {
  const additionalNumbers = getAdditionalNumbers(birthday)
  const mainNumbers = getMainNumbers(birthday)

  return (
    <div className="rounded-b-lg bg-[#282828] px-4 pb-14">
      {contentList.map(
        ({
          id,
          imageSrc,
          imageAlt,
          fileKey,
          altKeyByGender,
          textKey,
          title,
          defaultText,
          afterPayment,
          altTextKey,
        }) =>
          (!afterPayment || paymentCompleted) && (
            <div key={id} id={id}>
              {title && (
                <p className="bg-gradient-to-r from-[#CF4B92] to-[#523CC7] bg-clip-text pb-3 pt-6 text-2xl text-transparent">
                  {title}
                </p>
              )}
              {imageSrc && (
                <div className="relative my-3.5 aspect-[1/1] w-full">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-60"
                  />
                </div>
              )}
              {defaultText && (
                <p className="whitespace-pre-line text-sm font-light text-white">
                  {defaultText}
                </p>
              )}
              {fileKey && (
                <p className="whitespace-pre-line text-sm font-light text-white">
                  {getAccordionContentText({
                    fileKey,
                    altKey: altKeyByGender && gender,
                    textKey: additionalNumbers[textKey] || mainNumbers[textKey],
                    isShort: !paymentCompleted,
                    altTextKey: mainNumbers[altTextKey],
                  })}
                </p>
              )}
            </div>
          ),
      )}
    </div>
  )
}

export default AccordionContent
