import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import {UserContextProvider} from '../components/UserContext'
import "../styles/globals.css"
export default function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </SessionContextProvider>
  )
}

