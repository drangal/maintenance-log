import AddPlannedML from '@/components/AddPlannedML'
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
    <div className='flex h-screen justify-center items-center'>
      <AddPlannedML />
    </div>
  )
}
