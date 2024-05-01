import AuthButton from '@/components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import LogLogo from '@/components/LogLogo'
import Garage from '@/components/Garage'

export default async function ProtectedPage() {
  const supabase = createClient()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  return (
    <div className='flex-1 w-full flex flex-col gap-20 items-center'>
      <div className='w-full'>
        <nav className='w-full flex justify-center border-b border-b-foreground/10 h-16'>
          <div className='w-full max-w-4xl flex justify-between items-center p-3 text-sm'>
            <LogLogo />
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className='animate-in flex-1 flex flex-col opacity-0 max-w-4xl'>
        <Garage />
      </div>

      <footer className='w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs'>
        <p>
          © 2024 Киселёв Даниил. Все права защищены.
          <br />
          <a
            href='mailto:drangal@rambler.ru'
            target='_blank'
            className='font-bold hover:underline'
            rel='noreferrer'
          >
            Поддержка
          </a>{' '}
          |{' '}
          <a
            href='https://github.com/drangal'
            target='_blank'
            className='font-bold hover:underline'
            rel='noreferrer'
          >
            GitHub
          </a>
          <br />
          Разработано студентом кафедры "Программной инженерии" им. Л.П.
          Фельдмана ДонНТУ
          <br />
        </p>
      </footer>
    </div>
  )
}
