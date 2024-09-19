import { redirect } from 'next/navigation'
import { Nanum_Myeongjo } from 'next/font/google' // eslint-disable-line

const jeju = Nanum_Myeongjo({ subsets: ['latin'], weight: '400' })

const Form = async ({ birthday, gender }) => {
  const action = async (formData) => {
    'use server'

    const genderInput = formData.get('gender')
    const birthdayInput = formData.get('birthday')
    redirect(`/?gender=${genderInput}&birthday=${birthdayInput}`)
  }

  return (
    <form
      action={action}
      className={`relative z-10 flex w-full flex-col items-center gap-10 md:w-[370px] ${jeju.className}`}
    >
      <div className="flex w-full items-center rounded-full border-[3px] border-black md:gap-2">
        <div className="relative flex-1">
          <input
            type="date"
            name="birthday"
            id="birthday"
            defaultValue={birthday}
            required
            max={new Date().toISOString().split('T')[0]}
            placeholder="Enter Your Birthday"
            className="
            peer
            h-[60px]
            w-full
            min-w-36
            appearance-none
            rounded-full border-[0.6px] border-solid border-slate-600
            bg-transparent p-2
            px-8 text-transparent transition-all
            valid:text-white
            focus:border-[#CF4B92] focus:text-white focus:outline-none
            "
            style={{
              background: 'rgba(255, 255, 255, 0.01)',
              backdropFilter: 'blur(1px)',
            }}
          />
          <label
            htmlFor="birthday"
            className="
            absolute
            left-4
            top-7 w-max -translate-y-1/2 scale-100
            appearance-none text-sm text-[#CDCFDF] transition-all
            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
            peer-valid:-translate-x-6 peer-valid:-translate-y-12
            peer-valid:scale-75 peer-focus:-translate-x-6 peer-focus:-translate-y-12
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
                defaultChecked={item === gender || item === 'M'}
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
        className="h-[67px] w-full rounded-full bg-gradient-to-r from-[#CF4B92] to-[#523CC7] px-8 py-2 text-4xl text-white opacity-85 md:w-[353px] md:opacity-100"
      >
        Explore
      </button>
    </form>
  )
}

export default Form
