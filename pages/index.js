import { useRouter } from 'next/router'
import { useContext } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import Layout from '../components/Layout.js'
import UserContext from '../components/UserContext'
import Account from '../components/Account'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth 
          providers={['github']} 
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }} 
          theme="dark"
        />
      ) : (
        <Account session={session} />
      )}
    </div>
  )
}
export default Home