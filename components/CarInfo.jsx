'use client'

import { createClient } from '@/utils/supabase/client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CarInfo() {
  const searchParams = useSearchParams()
  const cid = searchParams.get('cid')
  const supabase = createClient()

  const [carsByCid, setCarsByCid] = useState([]) // State to store cars by car id

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
  }, []) // Empty dependency array to fetch garages only once

  return (
    <div className='rounded-lg border shadow-sm' data-v0-t='card'>
      {carsByCid.map((carByCid) => (
        <div key={carByCid.id} className='px-6 flex items-center gap-4'>
          <div className='flex flex-col min-h-[100dvh] min-w-[50dvw]'>
            <main className='flex-1'>
              <section className='w-full pt-3 md:pt-5 lg:pt-6'>
                <div className='container space-y-10 xl:space-y-16'>
                  <div className='flex flex-col items-center justify-center space-y-4 text-center'>
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
