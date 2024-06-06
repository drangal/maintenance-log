import BackToPageButton from '@/components/BackToPageButton'
import CarInfo from '@/components/CarInfo'
import MaintenanceLogInfo from '@/components/MaintenanceLogInfo'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Page() {
  const supabase = createClient()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  return (
    <div className='flex flex-col justify-center items-center py-4'>
      <div className=' self-start py-4'>
        <BackToPageButton url='/protected' />
      </div>
      <CarInfo />
      <MaintenanceLogInfo />
    </div>
  )
}
