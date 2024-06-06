'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MaintenanceLogInfo() {
  const searchParams = useSearchParams()
  const cid = searchParams.get('cid')
  const supabase = createClient()
  const router = useRouter()

  const [maintenanceRecordsByCid, setMaintenanceRecordsByCid] = useState([])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.getMonth() + 1 // Месяцы в JS индексируются с 0
    const year = date.getFullYear()

    return `${day}.${month}.${year}г.`
  }

  useEffect(() => {
    const getMaintenanceRecordsByCid = async () => {
      try {
        const { data: maintenance_records, error } = await supabase
          .from('maintenance_records')
          .select(
            `description,
            price,
            maintenance_mileage,
            created_at,
            work_types (
              name
            )`
          )
          .eq('car_id', cid)

        if (error) throw error

        setMaintenanceRecordsByCid(maintenance_records)
        console.log('Записи то успешно прочитаны: ', maintenance_records)
      } catch (error) {
        console.error('Ошибка при получении записей то: ', error)
      }
    }

    getMaintenanceRecordsByCid()
  }, []) // Empty dependency array to fetch garages only once

  return (
    <div className='rounded-lg border shadow-sm' data-v0-t='card'>
      <div className='px-6 flex items-center gap-4'>
        <div className='flex flex-col min-h-[20dvh] min-w-[50dvw]'>
          <main className='flex-1'>
            <section className='w-full pt-3 md:pt-5 lg:pt-6'>
              <div className='container space-y-10 xl:space-y-16'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                  <div className='space-y-2'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                      Технические работы
                    </h2>
                    <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                      Здесь вы можете оставить заметку о проделанной работе.
                    </p>
                    <button
                      onClick={() =>
                        router.push('/protected/add-maintenance-log?cid=' + cid)
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
                </div>
                <div className='mx-auto grid max-w-5xl items-center gap-6 pb-12'>
                  {maintenanceRecordsByCid.length != 0
                    ? maintenanceRecordsByCid.map((maintenanceRecordByCid) => (
                        <div className='relative w-full overflow-auto'>
                          <div className='flex flex-col border-b border-t transition-colors w-full caption-bottom text-sm'>
                            <div className='py-2 underline underline-offset-2'>
                              {maintenanceRecordByCid.work_types?.name || '-'}
                            </div>
                            <div className='py-2'>
                              {maintenanceRecordByCid.description || '-'}
                            </div>
                            <div className='flex justify-between py-2'>
                              <div>
                                {' '}
                                {(maintenanceRecordByCid.price || '0') + '₽'}
                              </div>
                              <div>
                                {' '}
                                {maintenanceRecordByCid.maintenance_mileage ||
                                  '-'}
                              </div>
                              <div>
                                {' '}
                                {formatDate(
                                  maintenanceRecordByCid.created_at
                                ) || '-'}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : 'Записей о работах нет . . .'}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
