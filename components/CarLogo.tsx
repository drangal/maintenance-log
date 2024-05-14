import Image from 'next/image'

export default function CarLogo() {
  return (
    <Image
      src='https://kbipmiuahlcsglukpmwm.supabase.co/storage/v1/object/public/logo/car.png'
      alt='CarLogo'
      width={400}
      height={100}
      className='hide'
    />
  )
}
