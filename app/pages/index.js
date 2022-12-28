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
      <div class="w-2/2 mx-auto">
        <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
          <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
            <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
            </div>
            <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
            </div>
            <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
            </div>
            <div class="mx-auto pr-16" id="terminaltitle">
              <p class="text-center text-sm">Terminal Nass App</p>
            </div>

          </div>
          <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
          {session ?  <p class="pb-1">Last login : {new Date().toUTCString().toString()} on {session.user.email}</p> 
          : <p class="pb-1">Hello please login to your account, or create one to use the website.</p>}
            <p class="pb-1">Disclaimer : Do not forget to complete your registration by clicking on the profile logo, top right.</p>
            <p class="pb-1">Tuto : You can view, create, like, edit and comment posts by clicking on Articles.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Home