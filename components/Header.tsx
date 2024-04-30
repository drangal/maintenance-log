import CarLogo from './CarLogo'

export default function Header() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-center items-center'>
        <a href='' target='_blank' rel='noreferrer'>
          <CarLogo />
        </a>
      </div>
      <h1 className='sr-only'>Supabase and Next.js Starter Template</h1>
      <p className='text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center'>
        Лучшее решение по <b>ведению</b> бортвого <b>журнала</b> автомобиля!
      </p>
      <div className='w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8' />
    </div>
  )
}
