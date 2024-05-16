export default function CarList({ children }: { children: React.ReactNode }) {
  return (
    <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
      <div className='flex p-6'>
        <h3 className='whitespace-nowrap text-2xl font-semibold leading-none tracking-tight'>
          <span className='inline-block align-middle'>Автомобили</span>
        </h3>
        <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 ml-auto rounded-full border'>
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
      <div className='p-6'>
        <div className='grid gap-4 md:gap-2'>{children}</div>
      </div>
    </div>
  )
}
