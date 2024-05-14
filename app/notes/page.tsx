'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getNotes = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getNotes()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
