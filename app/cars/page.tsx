'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [cars, setCars] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getCars = async () => {
      const { data } = await supabase.from('cars').select()
      setCars(data)
      console.log(data)
    }
    const getGarages = async () => {
      const { data } = await supabase.from('garages').select()
      console.log(data)
    }
    getCars()
  }, [])

  return (
    <>
      <pre>{'Пока ничего нет' || JSON.stringify(cars, null, 2)}</pre>
      <br />
    </>
  )
}
