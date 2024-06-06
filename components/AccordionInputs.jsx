'use client'
import React, { useState } from 'react'

const AccordionInput = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className='accordion-container'>
      <button
        type='button'
        className='accordion-button underline'
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
          />
        </div>
      )}
    </div>
  )
}

export default AccordionInput
