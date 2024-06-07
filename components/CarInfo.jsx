'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CarInfo() {
  const searchParams = useSearchParams()
  const cid = searchParams.get('cid')
  const supabase = createClient()
  const router = useRouter()

  const [carsByCid, setCarsByCid] = useState([]) // State to store cars by car id

  const deleteCar = async () => {
    try {
      const { error } = await supabase.from('cars').delete().eq('id', cid)

      if (error) throw error
      console.log('Автомобиль успешно удален')
      router.push('/protected')
    } catch (error) {
      console.error('Ошибка при удалении авто:', error)
    }
  }

  useEffect(() => {
    const getCarsByCid = async () => {
      try {
        const { data, error } = await supabase
          .from('cars')
          .select('*')
          .eq('id', cid)

        if (error) throw error

        setCarsByCid(data)
        console.log('Авто с id ' + cid + ' успешно прочитано:', data)
      } catch (error) {
        console.error('Ошибка при получении авто с id ' + cid + ':', error)
      }
    }

    getCarsByCid()
  }, [])

  return (
    <div className='rounded-lg border shadow-sm' data-v0-t='card'>
      {carsByCid.map((carByCid) => (
        <div key={carByCid.id} className='px-6 flex items-center gap-4'>
          <div className='flex flex-col min-h-[100dvh] min-w-[50dvw]'>
            <main className='flex-1'>
              <section className='w-full pt-3 md:pt-5 lg:pt-6'>
                <div className='container space-y-10 xl:space-y-16'>
                  <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                    <div className='flex justify-between w-full'>
                      <button
                        className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-danger hover:bg-lime-300/30 hover:text-danger-foreground h-10 w-10 rounded-full'
                        onClick={() =>
                          router.push('/protected/edit-car-form?cid=' + cid)
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
                        className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-danger/60 hover:text-danger-foreground h-10 w-10 rounded-full'
                        onClick={deleteCar}
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
                    <div className='space-y-2'>
                      <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                        Технические характеристики
                      </h2>
                      <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                        При необходимости измените данные об авто с помощью vin
                        кода.
                      </p>
                    </div>
                  </div>
                  <div className='mx-auto grid max-w-5xl items-center gap-6 pb-12'>
                    <div className='relative w-full overflow-auto'>
                      <table className='w-full caption-bottom text-sm'>
                        <thead className='[&amp;_tr]:border-b'>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                              Характеристика
                            </th>
                            <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                              Значение
                            </th>
                          </tr>
                        </thead>
                        <tbody className='[&amp;_tr:last-child]:border-0'>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Марка авто
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.make || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Производитель
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.manufacture_name || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Модель
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.model || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Год выпуска
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.model_year || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Тип комплектации
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.trim || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Тип транспортного средтсва по WMI
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.vehicle_type || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Полная масса транспортного средства
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.gvwr || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Тип привода
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.drive_type || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Рабочий объем двиагтеля (в литрах)
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.displacement || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Расширенная ифнормация
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.extended_information || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              VIN
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.vin || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Регистрационный номер
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.license_plate || '-'}
                            </td>
                          </tr>
                          <tr className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              Пробег
                            </td>
                            <td className='p-4 align-middle [&amp;:has([role=checkbox])]:pr-0'>
                              {carByCid.mileage || '-'}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      ))}
    </div>
  )
}
