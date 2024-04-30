import Image from 'next/image'

export default function LogLogo() {
  return (
    <Image
      src='https://kbipmiuahlcsglukpmwm.supabase.co/storage/v1/object/public/logo/logo-image.png'
      alt='Logo'
      width={100}
      height={50}
    />
  )
}
