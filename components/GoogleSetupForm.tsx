import { useState } from 'react'

export default function GoogleSetupForm() {
  const initialFormData = {
    email: '',
    message: '',
  }

  const [formData, setFormData] = useState(initialFormData)

  function handleChange(event: any) {
    const { name, value } = event.target

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  async function subscribeUser(event: any) {
    event.preventDefault()
    const res = await fetch('/api/convertkitSubscribe', {
      body: JSON.stringify({ email: formData.email }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
    })

    const json_res = await res.json()

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        message: json_res.message,
        email: '',
      }
    })
  }

  return (
    <form onSubmit={subscribeUser} className="mb-[20px]">
      <input
        id="email"
        type="email"
        placeholder="Enter Your Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
        required
        autoComplete="on"
        className="bg-[#FCFCFC] text-[#1E2D44] text-center rounded w-full h-[39px] mb-[20px] text-[15px] focus:outline-none"
      />
      <button
        type="submit"
        name="email"
        className="secondary-button w-[258px] h-[42px] text-[17px]"
      >
        Claim Your Free Setup
      </button>
      <div className="flex justify-center">
        {formData.message.length > 0 && (
          <p className="bg-[#698C40] text-center text-sm mt-3 w-[300px] rounded-[5px] p-2">
            {formData.message}
          </p>
        )}
      </div>
    </form>
  )
}
