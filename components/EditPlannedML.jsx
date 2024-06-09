'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import BackToPageButton from './BackToPageButton'
import { createClient } from '@/utils/supabase/client'

export default function EditPlannedML() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mlid = searchParams.get('mlid')
  const supabase = createClient()

  const [workTypes, setWorkTypes] = useState([])
  const [plannedMaintenanceMileage, setPlannedMaintenanceMileage] =
    useState(null)
  const [workTypeId, setWorkTypeId] = useState(null)
  const [description, setDescription] = useState(null)
  const [reminder, setReminder] = useState(null)
  const [maintenanceRecordsByMLid, setMaintenanceRecordsByMlid] = useState(null)

  useEffect(() => {
    const getMaintenanceRecordsByMlid = async () => {
      try {
        const { data: planned_maintenance, error } = await supabase
          .from('planned_maintenances')
          .select(
            `id, 
            description,
            reminder,
            planned_maintenance_mileage,
            created_at,
            work_type_id,
            cars (
              id,
              mileage
            )`
          )
          .eq('id', mlid)

        if (error) throw error

        setReminder(planned_maintenance[0].reminder)
        setDescription(planned_maintenance[0].description)
        setWorkTypeId(planned_maintenance[0].work_type_id)
        setPlannedMaintenanceMileage(planned_maintenance[0].cars.mileage)
        setMaintenanceRecordsByMlid(planned_maintenance)
        console.log('Записи то успешно прочитаны: ', planned_maintenance)
      } catch (error) {
        console.error('Ошибка при получении записей то: ', error)
      }
    }
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
    getWorkTypes()
    getMaintenanceRecordsByMlid()
  }, []) // Empty dependency array to fetch garages only once

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase
        .from('planned_maintenances')
        .update([
          {
            planned_maintenance_mileage: plannedMaintenanceMileage,
            work_type_id: workTypeId,
            description: description,
            reminder: reminder
          }
        ])
        .eq('id', mlid)
        .select()

      if (error) throw error

      console.log('Запись ТО изменена успешно: ', data)
      if (reminder) {
        const { data: notificationData, error } = await supabase
          .from('notifications')
          .update([
            {
              is_read: !reminder
            }
          ])
          .eq('planned_maintenance_id', mlid)
          .select()

        if (error) throw error

        console.log('Уведомление изменено успешно: ', notificationData)
      } else {
        const { data: notificationData, error } = await supabase
          .from('notifications')
          .update([
            {
              is_read: !reminder
            }
          ])
          .eq('planned_maintenance_id', mlid)
          .select()

        if (error) throw error

        console.log('Уведомление изменено успешно: ', notificationData)
      }
      router.push(
        '/protected/car-info?cid=' + maintenanceRecordsByMLid[0].cars.id
      )
    } catch (error) {
      console.error(
        plannedMaintenanceMileage +
          ' ' +
          workTypeId +
          ' ' +
          description +
          ' ' +
          price +
          ' ' +
          mlid
      )
      console.error('Ошибка при изменении записи ТО: ', error)
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
        {maintenanceRecordsByMLid && (
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
                  defaultValue={
                    maintenanceRecordsByMLid[0].planned_maintenance_mileage || 0
                  }
                  min={
                    maintenanceRecordsByMLid[0].planned_maintenance_mileage || 0
                  }
                  onChange={(e) => setPlannedMaintenanceMileage(e.target.value)}
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
                  defaultValue={maintenanceRecordsByMLid[0].work_type_id}
                  onChange={(e) => setWorkTypeId(e.target.value)}
                >
                  {/* Динамически заполненные опции из базы данных */}
                  <option value={-1}>{''}</option>
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
                  defaultValue={maintenanceRecordsByMLid[0].description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className='space-y-2'>
                <label
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 items-center mb-5 cursor-pointer'
                  htmlFor='reminder'
                >
                  Включить уведомления
                  <input
                    id='reminder'
                    type='checkbox'
                    class='sr-only peer'
                    defaultChecked={maintenanceRecordsByMLid[0].reminder}
                    onChange={(e) => setReminder(e.target.checked)}
                  />
                  <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <button
              className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'
              type='submit'
            >
              Сохраните информацию
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
