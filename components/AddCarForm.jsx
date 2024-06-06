'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import BackToPageButton from './BackToPageButton'
import { createClient } from '@/utils/supabase/client'

export default function AddCarForm() {
  const searchParams = useSearchParams()
  const gid = searchParams.get('gid')
  const router = useRouter()
  const supabase = createClient()

  const [isOpen, setIsOpen] = useState(false)
  const [make, setMake] = useState(null)
  const [manufactureName, setManufactureName] = useState(null)
  const [model, setModel] = useState(null)
  const [modelYear, setModelYear] = useState(null)
  const [trim, setTrim] = useState(null)
  const [vehicleType, setVehicleType] = useState(null)
  const [gvwr, setGvwr] = useState(null)
  const [driveType, setDriveType] = useState(null)
  const [displacement, setDisplacement] = useState(null)
  const [extendedInformation, setExtendedInformation] = useState(null)
  const [vin, setVin] = useState(null)
  const [licensePlate, setLicensePlate] = useState(null)
  const [mileage, setMileage] = useState(null)

  const toggle = () => setIsOpen(!isOpen)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase
        .from('cars')
        .insert([
          {
            make: make,
            manufacture_name: manufactureName,
            model: model,
            model_year: modelYear,
            trim: trim,
            vehicle_type: vehicleType,
            gvwr: gvwr,
            drive_type: driveType,
            displacement: displacement,
            extended_information: extendedInformation,
            vin: vin,
            license_plate: licensePlate,
            mileage: mileage,
            garage_id: gid
          }
        ])
        .select()

      if (error) throw error

      console.log('Автомобиль добавлен успешно:', data)
      router.push('/protected')
    } catch (error) {
      console.log(
        make +
          ' ' +
          manufactureName +
          ' ' +
          model +
          ' ' +
          modelYear +
          ' ' +
          trim +
          ' ' +
          vehicleType +
          ' ' +
          gvwr +
          ' ' +
          driveType +
          ' ' +
          displacement +
          ' ' +
          extendedInformation +
          ' ' +
          vin +
          ' ' +
          licensePlate +
          ' ' +
          mileage +
          ' ' +
          gid +
          ' '
      )
      console.error('Ошибка при добавлении автомобиля:', error)
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
          Информация об автомобиле
        </h3>
        <p className='text-sm text-muted-foreground'>
          Заполните подробную информацию о вашем автомобиле.
        </p>
      </div>
      <div className='p-6'>
        <form className='grid gap-4' onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='make'
              >
                Марка
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='make'
                placeholder='Введите марку авто'
                onChange={(e) => setMake(e.target.value)}
              />
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='model'
              >
                Модель
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='model'
                placeholder='Введите модель авто'
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='year'
              >
                Год выпуска
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='year'
                placeholder='Введите год выпуска'
                type='number'
                min={0}
                onChange={(e) => setModelYear(e.target.value)}
              />
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='mileage'
              >
                Пробег
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='mileage'
                placeholder='Введите пробег авто'
                type='number'
                min={0}
                onChange={(e) => setMileage(e.target.value)}
              />
            </div>
          </div>
          <div className='space-y-2'>
            <div>
              <button
                type='button'
                className='underline'
                onClick={() => toggle()}
              >
                {isOpen ? 'Скрыть' : 'Указать подробности'}
              </button>
              {isOpen && (
                <div
                  className={`accordion-content ${
                    isOpen ? 'animate__slideInDown animate__animated ' : ''
                  }`}
                >
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4'
                    htmlFor='vin'
                  >
                    VIN-код
                  </label>
                  <input
                    className='flex h-10 w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='vin'
                    placeholder='Введите vin'
                    onChange={(e) => setVin(e.target.value)}
                  />
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4'
                    htmlFor='description'
                  >
                    Описание
                  </label>
                  <textarea
                    className='flex w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]'
                    id='description'
                    placeholder='Введите краткое описание авто'
                    onChange={(e) => setExtendedInformation(e.target.value)}
                  ></textarea>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4'
                    htmlFor='manufacture_name'
                  >
                    Название производителя
                  </label>
                  <input
                    className='flex h-10 w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='manufacture_name'
                    placeholder='Введите название'
                    onChange={(e) => setManufactureName(e.target.value)}
                  />
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4'
                    htmlFor='trim'
                  >
                    Тип комплектации
                  </label>
                  <input
                    className='flex h-10 w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='trim'
                    placeholder='Введите тип комплектации'
                    onChange={(e) => setTrim(e.target.value)}
                  />
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4'
                    htmlFor='vehicle_type'
                  >
                    Тип транспортного средства по WMI
                  </label>
                  <input
                    className='flex h-10 w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='vehicle_type'
                    placeholder='Введите тип транспортного средства по WMI'
                    onChange={(e) => setVehicleType(e.target.value)}
                  />
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4'
                    htmlFor='gvwr'
                  >
                    Полная масса транспортного средства
                  </label>
                  <input
                    className='flex h-10 w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='gvwr'
                    placeholder='Введите массу'
                    onChange={(e) => setGvwr(e.target.value)}
                  />
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4'
                    htmlFor='drive_type'
                  >
                    Тип привода
                  </label>
                  <input
                    className='flex h-10 w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='drive_type'
                    placeholder='Введите тип привода'
                    onChange={(e) => setDriveType(e.target.value)}
                  />
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4'
                    htmlFor='displacement'
                  >
                    Рабочий объем двигателя (в литрах)
                  </label>
                  <input
                    className='flex h-10 w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='displacement'
                    placeholder='Введите объем двигателя'
                    onChange={(e) => setDisplacement(e.target.value)}
                  />
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4'
                    htmlFor='license_plate'
                  >
                    Регистрационный номер транспортного средства
                  </label>
                  <input
                    className='flex h-10 w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='license_plate'
                    placeholder='Введите номер авто'
                    onChange={(e) => setLicensePlate(e.target.value)}
                  />
                </div>
              )}
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
