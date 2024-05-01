export default function Garage() {
  return (
    <div className='grid items-start gap-4 min-h-screen w-full px-4 lg:gap-8 lg:px-6'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-center gap-4 pt-4 lg:pt-8'>
          <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full border'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-4 w-4'
            >
              <path d='m15 18-6-6 6-6'></path>
            </svg>
            <span className='sr-only'>Back</span>
          </button>
          <h1 className='font-semibold text-lg md:text-xl'>Мои гаражи</h1>
          <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-auto'>
            Новый Гараж
          </button>
        </div>
        <div className='grid gap-4 md:gap-8 mt-4'>
          <div
            className='rounded-lg border bg-card text-card-foreground shadow-sm'
            data-v0-t='card'
          >
            <div className='flex items-start gap-4 p-4 md:p-6'>
              <div className='grid gap-1 text-sm'>
                <h2 className='font-semibold'>Main Street Garage</h2>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  1234 Main St, Anytown, CA
                </p>
              </div>
            </div>
            <div className='p-4 md:p-6'>
              <div className='grid gap-4 md:gap-8'>
                <div
                  className='rounded-lg border bg-card text-card-foreground shadow-sm'
                  data-v0-t='card'
                >
                  <div className='flex flex-col space-y-1.5 p-6'>
                    <h3 className='whitespace-nowrap text-2xl font-semibold leading-none tracking-tight'>
                      Автомобили
                    </h3>
                  </div>
                  <div className='p-6'>
                    <div className='grid gap-4 md:gap-2'>
                      <div
                        className='rounded-lg border bg-card text-card-foreground shadow-sm'
                        data-v0-t='card'
                      >
                        <div className='p-6 flex items-center gap-4'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            className='h-8 w-8 rounded-full'
                          >
                            <path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2'></path>
                            <circle cx='7' cy='17' r='2'></circle>
                            <path d='M9 17h6'></path>
                            <circle cx='17' cy='17' r='2'></circle>
                          </svg>
                          <div className='grid gap-1 text-sm'>
                            <h3 className='font-semibold'>Toyota Camry</h3>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                              VIN-код: ABC123
                            </p>
                          </div>
                          <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 ml-auto'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              className='h-4 w-4'
                            >
                              <path d='m9 18 6-6-6-6'></path>
                            </svg>
                            <span className='sr-only'>Подробности</span>
                          </button>
                        </div>
                      </div>
                      <div
                        className='rounded-lg border bg-card text-card-foreground shadow-sm'
                        data-v0-t='card'
                      >
                        <div className='p-6 flex items-center gap-4'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            className='h-8 w-8 rounded-full'
                          >
                            <path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2'></path>
                            <circle cx='7' cy='17' r='2'></circle>
                            <path d='M9 17h6'></path>
                            <circle cx='17' cy='17' r='2'></circle>
                          </svg>
                          <div className='grid gap-1 text-sm'>
                            <h3 className='font-semibold'>Honda Civic</h3>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                              VIN-код: XYZ789
                            </p>
                          </div>
                          <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 ml-auto'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              className='h-4 w-4'
                            >
                              <path d='m9 18 6-6-6-6'></path>
                            </svg>
                            <span className='sr-only'>Подробности</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='rounded-lg border bg-card text-card-foreground shadow-sm'
            data-v0-t='card'
          >
            <div className='flex items-start gap-4 p-4 md:p-6'>
              <div className='grid gap-1 text-sm'>
                <h2 className='font-semibold'>Suburban Auto Works</h2>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  5678 Elm St, Suburbia, CA
                </p>
              </div>
            </div>
            <div className='p-4 md:p-6'>
              <div className='grid gap-4 md:gap-8'>
                <div
                  className='rounded-lg border bg-card text-card-foreground shadow-sm'
                  data-v0-t='card'
                >
                  <div className='flex flex-col space-y-1.5 p-6'>
                    <h3 className='whitespace-nowrap text-2xl font-semibold leading-none tracking-tight'>
                      Автомобили
                    </h3>
                  </div>
                  <div className='p-6'>
                    <div className='grid gap-4 md:gap-2'>
                      <div
                        className='rounded-lg border bg-card text-card-foreground shadow-sm'
                        data-v0-t='card'
                      >
                        <div className='p-6 flex items-center gap-4'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            className='h-8 w-8 rounded-full'
                          >
                            <path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2'></path>
                            <circle cx='7' cy='17' r='2'></circle>
                            <path d='M9 17h6'></path>
                            <circle cx='17' cy='17' r='2'></circle>
                          </svg>
                          <div className='grid gap-1 text-sm'>
                            <h3 className='font-semibold'>Ford F-150</h3>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                              VIN-код: F150CAR
                            </p>
                          </div>
                          <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 ml-auto'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              className='h-4 w-4'
                            >
                              <path d='m9 18 6-6-6-6'></path>
                            </svg>
                            <span className='sr-only'>Подробности</span>
                          </button>
                        </div>
                      </div>
                      <div
                        className='rounded-lg border bg-card text-card-foreground shadow-sm'
                        data-v0-t='card'
                      >
                        <div className='p-6 flex items-center gap-4'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            className='h-8 w-8 rounded-full'
                          >
                            <path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2'></path>
                            <circle cx='7' cy='17' r='2'></circle>
                            <path d='M9 17h6'></path>
                            <circle cx='17' cy='17' r='2'></circle>
                          </svg>
                          <div className='grid gap-1 text-sm'>
                            <h3 className='font-semibold'>Chevy Malibu</h3>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                              VIN-код: MAL1BU
                            </p>
                          </div>
                          <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 ml-auto'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              className='h-4 w-4'
                            >
                              <path d='m9 18 6-6-6-6'></path>
                            </svg>
                            <span className='sr-only'>Подробности</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
