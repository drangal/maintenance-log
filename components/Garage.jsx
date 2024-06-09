import CarItem from './CarItem'
import BackToPageButton from './BackToPageButton'
import Link from 'next/link'
import GarageItem from './GarageItem'

export default function Garage() {
  return (
    <div className='grid items-start gap-4 min-h-screen w-full px-4 lg:gap-8 lg:px-6'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-center gap-4 pt-4 lg:pt-8'>
          <BackToPageButton url='/' />
          <h1 className='font-semibold text-lg md:text-xl'>Мои гаражи</h1>
          <Link
            href={'/protected/add-garage-form'}
            className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-9 rounded-md px-3 ml-auto'
          >
            Новый Гараж
          </Link>
        </div>
        <GarageItem />
      </div>
    </div>
  )
}
