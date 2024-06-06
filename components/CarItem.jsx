'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CarItem({ gid }) {
  const supabase = createClient()
  const router = useRouter()

  const [carsByGid, setCarsByGid] = useState([]) // State to store cars by garage id

  useEffect(() => {
    const getCarsByGid = async () => {
      try {
        const { data, error } = await supabase
          .from('cars')
          .select('*')
          .eq('garage_id', gid)

        if (error) throw error

        setCarsByGid(data)
        console.log('Авто с id гаража ' + gid + ' успешно прочитаны:', data)
      } catch (error) {
        console.error(
          'Ошибка при получении списка авто гаража с id ' + gid + ':',
          error
        )
      }
    }

    getCarsByGid()
  }, []) // Empty dependency array to fetch garages only once

  return (
    <div
      className='rounded-lg border bg-card text-card-foreground shadow-sm'
      data-v0-t='card'
    >
      {carsByGid.map((carByGid) => (
        <div key={carByGid.id} className='p-6 flex items-center gap-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-8 w-8 rounded-full'
          >
            <path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2'></path>
            <circle cx='7' cy='17' r='2'></circle>
            <path d='M9 17h6'></path>
            <circle cx='17' cy='17' r='2'></circle>
          </svg>
          <div className='grid gap-1 text-sm'>
            <h3 className='font-semibold'>
              {carByGid.make + ' ' + carByGid.model}
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              {carByGid.vin
                ? 'VIN-код: ' + carByGid.vin
                : 'Пробег: ' + carByGid.mileage}
            </p>
          </div>
          <button
            onClick={() =>
              router.push('/protected/car-info?cid=' + carByGid.id)
            }
            className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 w-10 ml-auto'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-4 w-4'
            >
              <path d='m9 18 6-6-6-6'></path>
            </svg>
            <span className='sr-only'>Подробности</span>
          </button>
        </div>
      ))}
    </div>
  )
}
