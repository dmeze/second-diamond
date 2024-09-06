import { redirect } from 'next/navigation'

const Form = async ({ searchParams }) => {
  const action = async (formData) => {
    'use server'

    const gender = formData.get('gender')
    const birthday = formData.get('birthday')
    redirect(`/?gender=${gender}&birthday=${birthday}`)
  }

  return (
    <form
      action={action}
      className="flex size-full flex-col md:max-w-[400px] md:gap-10"
    >
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="date"
            name="birthday"
            id="birthday"
            defaultValue={searchParams?.birthday}
            required
            max={new Date().toISOString().split('T')[0]}
            className="
              peer h-[50px]
              w-full rounded-lg border-[0.6px]
              border-solid border-slate-600 bg-transparent p-2
              px-3 text-transparent
              transition-all valid:text-white focus:border-[#CF4B92]
              focus:text-white
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
              absolute left-10 top-6 -translate-y-1/2
              scale-100 text-[17px] text-[#CDCFDF] transition-all
              peer-placeholder-shown:translate-y-0
              peer-placeholder-shown:scale-100
              peer-valid:-translate-x-14 peer-valid:-translate-y-12
              peer-valid:scale-75 peer-focus:-translate-x-14 peer-focus:-translate-y-12
              peer-focus:scale-75 md:top-7
            "
          >
            Enter Your Birthday
          </label>
        </div>
        <div
          className="inline-flex space-x-2 rounded-xl p-1"
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
                defaultChecked={item === searchParams.gender || item === 'M'}
                className="peer sr-only"
              />
              <label
                htmlFor={item}
                className="flex size-[45px] cursor-pointer items-center justify-center rounded-lg text-gray-400 transition-colors peer-checked:!bg-white peer-checked:text-black"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="mb-[40px] mt-auto h-[55px] w-full rounded-lg bg-gradient-to-r from-[#CF4B92] to-[#523CC7] text-lg text-white md:mb-0 md:h-[67px] "
      >
        Explore
      </button>
    </form>
  )
}

export default Form
