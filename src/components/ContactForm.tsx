'use client'

import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa'
import Link from 'next/link'

type FormState = {
  nom: string
  email: string
  message: string
  file: File | null
}

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    nom: '',
    email: '',
    message: '',
    file: null
  })
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // On sait que only <input type="file"> a la propriété files
    if (e.target instanceof HTMLInputElement && e.target.name === 'file') {
      const fileList = e.target.files
      if (fileList && fileList.length > 0) {
        setForm({ ...form, file: fileList[0] })
      }
    } else {
      const { name, value } = e.target
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nom: form.nom,
        email: form.email,
        message: form.message
      })
    })
    if (res.ok) {
      setSent(true)
      setForm({ nom: '', email: '', message: '', file: null })
    } else {
      alert("Erreur d'envoi, réessaye plus tard.")
    }
  }

  return (
    <div className='w-full max-w-7xl mx-auto flex flex-col items-center bg-[#7c6a58] pt-16'>
      <div className='w-full max-w-3xl bg-[#7c6a58] p-8 mx-auto flex flex-col md:flex-row gap-12'>
        {/* Formulaire */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <label className='font-semibold text-lg text-white' htmlFor='nom'>
              Nom
            </label>
            <input
              type='text'
              name='nom'
              id='nom'
              placeholder='Votre nom'
              value={form.nom}
              onChange={handleChange}
              required
              className='p-3 rounded border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700'
            />

            <label className='font-semibold text-lg text-white' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Votre mail'
              value={form.email}
              onChange={handleChange}
              required
              className='p-3 rounded border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700'
            />

            <label
              className='font-semibold text-lg text-white'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              placeholder='Votre message'
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className='p-3 rounded border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700'
            />

            <label className='font-semibold text-lg text-white' htmlFor='file'>
              Pièce jointe
            </label>
            <input
              type='file'
              name='file'
              id='file'
              onChange={handleChange}
              className='block text-white border cursor-pointer'
            />

            {/* reCAPTCHA factice */}
            <div className='bg-white rounded p-2 flex items-center gap-2 mt-2'>
              <input type='checkbox' id='captcha' required />
              <label htmlFor='captcha' className='text-gray-700'>
                Je ne suis pas un robot
              </label>
            </div>

            <button
              type='submit'
              className='bg-green-700 text-white font-bold py-3 rounded hover:bg-green-800 transition mt-4'
            >
              Envoyer
            </button>

            {sent && (
              <div className='text-green-700 text-center font-semibold mt-2'>
                Merci pour votre message !
              </div>
            )}
          </form>
        </div>

        {/* Infos de contact */}
        <div className='flex-1 flex flex-col gap-4 justify-start'>
          <h3 className='text-2xl font-bold text-green-200 mb-2'>
            Adresse de l&apos;atelier
          </h3>
          <p className='text-white'>
            37 rue des moulins bleus 80830
            <br />
            L&apos;Etoile
          </p>
          <div className='flex items-center gap-2 text-green-900 mt-2'>
            <FaPhone /> <span className='text-white'>06 15 71 95 33</span>
          </div>
          <div className='flex items-center gap-2 text-green-900'>
            <FaEnvelope />{' '}
            <span className='text-white'>
              autour-de-latelier-du-bois@outlook.com
            </span>
          </div>
          <div className='flex items-center gap-2 text-green-900'>
            <FaFacebook />{' '}
            <Link href='#' className='text-white hover:underline'>
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
