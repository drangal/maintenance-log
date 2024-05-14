export default function CarList({ children }: { children: React.ReactNode }) {
  return (
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
        <div className='grid gap-4 md:gap-2'>{children}</div>
      </div>
    </div>
  )
}
