import Link from 'next/link'
import CarLogo from './CarLogo'

export default function Header() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='flex justify-center items-center '>
        <Link
          href='/protected'
          className='flex rounded-full no-underline dark:bg-black bg-gray-400 hover:bg-btn-background'
        >
          <CarLogo />
        </Link>
      </div>
      <div>
        <h1 className='sr-only'>
          The best solution for keeping a car logbook!
        </h1>
        <p className='text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center'>
          Лучшее решение по <b>ведению</b> бортвого <b>журнала</b> автомобиля!
        </p>
        <div className='w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8' />
      </div>
    </div>
  )
}
