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

  const deleteMaintenanceRecord = async (maintenanceRecordId) => {
    try {
      const { error } = await supabase
        .from('maintenance_records')
        .delete()
        .eq('id', maintenanceRecordId)

      if (error) throw error
      console.log('Запись успешно удалена')
      setMaintenanceRecordsByCid(
        maintenanceRecordsByCid.filter(
          (maintenanceRecordByCid) =>
            maintenanceRecordByCid.id !== maintenanceRecordId
        )
      )
    } catch (error) {
      console.error('Ошибка при удалении записи:', error)
    }
  }

  useEffect(() => {
    const getMaintenanceRecordsByCid = async () => {
      try {
        const { data: maintenance_records, error } = await supabase
          .from('maintenance_records')
          .select(
            `id, 
            description,
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
                        <div
                          key={maintenanceRecordByCid.id}
                          className='relative w-full overflow-auto'
                        >
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
                                {(maintenanceRecordByCid.maintenance_mileage ||
                                  '0') + ' км'}
                              </div>
                              <div>
                                {' '}
                                {formatDate(
                                  maintenanceRecordByCid.created_at
                                ) || '-'}
                              </div>
                            </div>
                            <div className='flex justify-between w-full py-2'>
                              <button
                                className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-danger hover:bg-lime-300/30 hover:text-danger-foreground h-7 w-7 rounded-full'
                                onClick={() =>
                                  router.push(
                                    '/protected/edit-maintenance-log?mlid=' +
                                      maintenanceRecordByCid.id
                                  )
                                }
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 50 50'
                                  width='24'
                                  height='24'
                                  fill='none'
                                  stroke='currentColor'
                                >
                                  <path d='m9.6 40.4 2.5-9.9L27 15.6l7.4 7.4-14.9 14.9-9.9 2.5zm4.3-8.9-1.5 6.1 6.1-1.5L31.6 23 27 18.4 13.9 31.5z' />
                                  <path d='M17.8 37.3c-.6-2.5-2.6-4.5-5.1-5.1l.5-1.9c3.2.8 5.7 3.3 6.5 6.5l-1.9.5z' />
                                  <path d='m29.298 19.287 1.414 1.414-13.01 13.02-1.414-1.41zM11 39l2.9-.7c-.3-1.1-1.1-1.9-2.2-2.2L11 39zm24-16.6L27.6 15l3-3 .5.1c3.6.5 6.4 3.3 6.9 6.9l.1.5-3.1 2.9zM30.4 15l4.6 4.6.9-.9c-.5-2.3-2.3-4.1-4.6-4.6l-.9.9z' />
                                </svg>
                              </button>
                              <button
                                className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-danger/60 hover:text-danger-foreground h-8 w-8 rounded-full'
                                onClick={() =>
                                  deleteMaintenanceRecord(
                                    maintenanceRecordByCid.id
                                  )
                                }
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
                                  className='h-3 w-3'
                                >
                                  <path d='M18 6 6 18'></path>
                                  <path d='m6 6 12 12'></path>
                                </svg>
                              </button>
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
