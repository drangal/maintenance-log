'use client'
import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import BackToPageButton from './BackToPageButton'

export default function AddGarageForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const supabase = createClient()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase
        .from('garages')
        .insert([{ name: name, description: description }])
        .select()

      if (error) throw error

      console.log('Гараж добавлен успешно:', data)
      // Очистить форму после успешной отправки
      setName('')
      setDescription('')
      router.push('/protected')
    } catch (error) {
      console.error('Ошибка при добавлении гаража:', error)
    }
  }

  return (
    <div className='flex h-screen justify-center items-center flex-col relative'>
      <div className='self-start mb-2'>
        <BackToPageButton url='/protected' />
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div>
            <label className='mr-2' htmlFor='name'>
              Название:
            </label>
            <input
              className='w-full h-full bg-transparent border-2 text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] focus:border-4 border-blue-gray-200 focus:border-gray-900'
              type='text'
              id='name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            className='flex mt-4 items-start relative mb-3'
            data-twe-input-wrapper-init
          >
            <label className='mr-4' htmlFor='description'>
              Описание:
            </label>
            <textarea
              className='min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 focus:border-4 border-blue-gray-200 focus:border-gray-900'
              id='description'
              rows='3'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            className='mt-4 justify-self-center border rounded-[7px] border-blue-gray-200 hover:border-gray-900 px-3 py-1 hover:border-2'
            type='submit'
          >
            Добавить гараж
          </button>
        </form>
      </div>
    </div>
  )
}
