import { useRouter } from 'next/router'
import { useContext } from 'react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import Layout from '../components/Layout.js'
import UserContext from '../components/UserContext'
import Account from '../components/Account'
import Gravatar from 'react-gravatar'
import Footer from '../components/Footer.js'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <Layout>
      
    </Layout>    
  )
}
export default Home