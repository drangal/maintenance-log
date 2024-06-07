'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import BackToPageButton from './BackToPageButton'
import { createClient } from '@/utils/supabase/client'

export default function AddCarForm() {
  const searchParams = useSearchParams()
  const cid = searchParams.get('cid')
  const router = useRouter()
  const supabase = createClient()

  const [isOpen, setIsOpen] = useState(false)
  const [carByCid, setCarByCid] = useState(null)
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

  useEffect(() => {
    const getCarByCid = async () => {
      try {
        const { data, error } = await supabase
          .from('cars')
          .select('*')
          .eq('id', cid)

        if (error) throw error

        setCarByCid(data[0])
        setMake(data[0].make)
        setManufactureName(data[0].manufacture_name)
        setModel(data[0].model)
        setModelYear(data[0].model_year)
        setTrim(data[0].trim)
        setVehicleType(data[0].vehicle_type)
        setGvwr(data[0].gvwr)
        setDriveType(data[0].drive_type)
        setDisplacement(data[0].displacement)
        setExtendedInformation(data[0].extended_information)
        setVin(data[0].vin)
        setLicensePlate(data[0].license_plate)
        setMileage(data[0].mileage)
        console.log('Авто с id ' + cid + ' успешно прочитано: ', data)
      } catch (error) {
        console.error('Ошибка при получении авто с id ' + cid + ': ', error)
      }
    }

    getCarByCid()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase
        .from('cars')
        .update([
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
            mileage: mileage
          }
        ])
        .eq('id', cid)
        .select()

      if (error) throw error

      console.log('Автомобиль добавлен успешно:', data)
      router.push('/protected/car-info?cid=' + cid)
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
          mileage
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
        {carByCid && (
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
                  defaultValue={carByCid.make}
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
                  defaultValue={carByCid.model}
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
                  defaultValue={carByCid.model_year}
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
                  defaultValue={carByCid.mileage}
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
                      defaultValue={carByCid.vin}
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
                      defaultValue={carByCid.description}
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
                      defaultValue={carByCid.manufacture_name}
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
                      defaultValue={carByCid.trim}
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
                      defaultValue={carByCid.vehicle_type}
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
                      defaultValue={carByCid.gvwr}
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
                      defaultValue={carByCid.drive_type}
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
                      defaultValue={carByCid.displacement}
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
                      defaultValue={carByCid.license_plate}
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
        )}
      </div>
    </div>
  )
}
