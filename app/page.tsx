import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import Header from '@/components/Header'
import LogLogo from '@/components/LogLogo'

export default async function Index() {
  const canInitSupabaseClient = () => {
    // Эта функция предназначена только подключения Supabase.
    try {
      createClient()
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className='flex-1 w-full flex flex-col  items-center'>
      <nav className='w-full flex justify-center border-b border-b-foreground/10 h-16'>
        <div className='w-full max-w-4xl flex justify-between items-center p-3 text-sm'>
          <LogLogo />
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className='animate-in flex-1 flex flex-col gap-20 p-3 opacity-0 max-w-4xl'>
        <Header />
        {/* <main className='flex-1 flex flex-col gap-6'>
          <h2 className='font-bold text-4xl mb-4'>Возможности приложения</h2>
          isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />
        </main> */}
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
