'use client'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CarItem from './CarItem'

export default function GarageItem({ children }) {
  const [garages, setGarages] = useState([]) // State to store garages
  const router = useRouter()

  const supabase = createClient()

  const deleteGarage = async (garageId) => {
    try {
      const { error } = await supabase
        .from('garages')
        .delete()
        .eq('id', garageId)

      if (error) throw error

      // Update garages state after successful deletion
      setGarages(garages.filter((garage) => garage.id !== garageId))
      console.log('Гараж успешно удален')
    } catch (error) {
      console.error('Ошибка при удалении гаража:', error)
    }
  }

  useEffect(() => {
    const getGarages = async () => {
      try {
        const { data, error } = await supabase.from('garages').select('*')

        if (error) throw error

        setGarages(data)
        console.log('Гаражи успешно прочитаны:', data)
      } catch (error) {
        console.error('Ошибка при получении списка гаражей:', error)
      }
    }

    getGarages()
  }, []) // Empty dependency array to fetch garages only once

  return (
    <div className='grid gap-4 md:gap-8 mt-4'>
      {garages.map((garage) => (
        <div
          key={garage.id}
          className='rounded-lg border bg-card text-card-foreground shadow-sm'
        >
          <div className='flex flex-col gap-4 p-4 md:p-6'>
            <div className='flex justify-between gap-4 '>
              <div className='grid gap-1 text-sm'>
                <h2 className='font-semibold'>{garage.name}</h2>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {garage.description}
                </p>
              </div>
              <button
                className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-danger hover:bg-danger/90 hover:text-danger-foreground h-10 w-10 rounded-full border'
                onClick={() => deleteGarage(garage.id)}
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
                  <path d='M18 6 6 18'></path>
                  <path d='m6 6 12 12'></path>
                </svg>
              </button>
            </div>

            <div className='p-4 md:p-6'>
              <div className='grid gap-4 md:gap-8'>
                {' '}
                <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
                  <div className='flex p-6'>
                    <h3 className='whitespace-nowrap text-2xl font-semibold leading-none tracking-tight'>
                      <span className='inline-block align-middle'>
                        Автомобили
                      </span>
                    </h3>
                    <button
                      onClick={() =>
                        router.push('/protected/add-car-form?gid=' + garage.id)
                      }
                      className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:bg-primary/90 hover:text-accent-foreground h-10 w-10 ml-auto rounded-full border'
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
                        <path d='M5 12h14'></path>
                        <path d='M12 5v14'></path>
                      </svg>
                    </button>
                  </div>
                  <div className='p-6'>
                    <div className='grid gap-4 md:gap-2'>
                      <CarItem gid={garage.id} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
