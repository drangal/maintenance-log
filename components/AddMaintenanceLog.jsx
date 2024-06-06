'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import BackToPageButton from './BackToPageButton'
import { createClient } from '@/utils/supabase/client'

export default function AddMaintenanceLog() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const cid = searchParams.get('cid')
  const supabase = createClient()

  const [workTypes, setWorkTypes] = useState([])
  const [carMileage, setCarMileage] = useState(null)
  const [maintenanceMileage, setMaintenanceMileage] = useState(null)
  const [workTypeId, setWorkTypeId] = useState(null)
  const [description, setDescription] = useState(null)
  const [price, setPrice] = useState(null)

  useEffect(() => {
    const getWorkTypes = async () => {
      try {
        const { data: work_types, error } = await supabase
          .from('work_types')
          .select('*')

        if (error) throw error

        setWorkTypes(work_types)
        console.log('Виды работ успешно прочитаны: ', work_types)
      } catch (error) {
        console.error('Ошибка при получении видов работ: ', error)
      }
    }
    const getCarMileage = async () => {
      console.log(cid)
      try {
        const { data: car_mileage, error } = await supabase
          .from('cars')
          .select('mileage')
          .eq('id', cid)

        if (error) throw error

        setCarMileage(car_mileage[0]?.mileage)
        setMaintenanceMileage(car_mileage[0]?.mileage)
        console.log('Пробег авто успешно прочитано: ', car_mileage[0]?.mileage)
      } catch (error) {
        console.error('Ошибка при получении пробега авто: ', error)
      }
    }

    getCarMileage()
    getWorkTypes()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase
        .from('maintenance_records')
        .insert([
          {
            maintenance_mileage: maintenanceMileage,
            work_type_id: workTypeId,
            description: description,
            price: price,
            car_id: cid
          }
        ])
        .select()

      if (error) throw error

      console.log('Запись ТО добавлена успешно: ', data)
      router.push('/protected/car-info?cid=' + cid)
    } catch (error) {
      console.error(
        maintenanceMileage +
          ' ' +
          workTypeId +
          ' ' +
          description +
          ' ' +
          price +
          ' ' +
          cid
      )
      console.error('Ошибка при добавлении записи ТО: ', error)
    }
  }
  return (
    <div
      className='rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-2xl'
      data-v0-t='card'
    >
      <div className=' pt-4 pl-4'>
        <BackToPageButton url='/protected' />
      </div>
      <div className='flex flex-col space-y-1.5 p-6'>
        <h3 className='whitespace-nowrap text-2xl font-semibold leading-none tracking-tight'>
          Информация о проделанной технической работе
        </h3>
        <p className='text-sm text-muted-foreground'>
          Заполните подробную информацию о работе.
        </p>
      </div>
      <div className='p-6'>
        <form className='grid gap-4' onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='maintenanceMileage'
              >
                Пробег
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='maintenanceMileage'
                placeholder='Введите пробег авто на момент записи'
                type='number'
                defaultValue={carMileage}
                max={carMileage || 9999999}
                min={0}
                onChange={(e) => setMaintenanceMileage(e.target.value)}
              />
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='workType'
              >
                Вид работы
              </label>

              <select
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='workType'
                onChange={(e) => setWorkTypeId(e.target.value)}
              >
                {/* Динамически заполненные опции из базы данных */}
                <option value={0}>{''}</option>
                {workTypes.map((workType) => (
                  <option key={workType.id} value={workType.id}>
                    {workType.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4'
                htmlFor='description'
              >
                Описание
              </label>
              <textarea
                className='flex w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]'
                id='description'
                placeholder='Введите описание проведенной работы'
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='price'
              >
                Затраты (в руб.)
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='price'
                placeholder='Введите затраченную сумму'
                type='number'
                defaultValue={0}
                min={0}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <button
            className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'
            type='submit'
          >
            Сохраните информацию
          </button>
        </form>
      </div>
    </div>
  )
}
