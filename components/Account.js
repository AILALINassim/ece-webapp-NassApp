import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Gravatar from 'react-gravatar'

export default function Account({ session }) {

  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(session.user.email)
  const [full_name, setFullName] = useState(null)


  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, email, full_name`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setEmail(data.email)
        setFullName(data.full_name)
        localStorage.setItem("userId", user.id);
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, full_name }) {
    try {
      setLoading(true)
      setEmail(session.user.email)
      const updates = {
        id: user.id,
        username: username,
        email: session.user.email,
        full_name: full_name,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">Update your profile</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md">
          </div>
          <div className="px-8 py-6 ">
          <Gravatar email={session.user.email} size={150}/>
          <div class="flex flex-row flex space-x-2">
            <label  className="font-semibold" htmlFor="email">Email : </label>
            <p>{session.user.email}</p>
          </div>
            <label className="block font-semibold"> Username</label>
            <input className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}>
              </input>
              <label className="block mt-3 font-semibold"> Fullname </label>
           
            <input className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
              id="fullname"
              type="text"
              value={full_name || ''}
              onChange={(e) => setFullName(e.target.value)} >
            </input>
     

            <div>
              <button
                className="button primary block"
                onClick={() => updateProfile({ username, email, full_name })}
                disabled={loading}
              >
                {loading ? 'Loading ...' : 'Update'}
              </button>
            </div>
            <div>
              <button className="button block" onClick={() => supabase.auth.signOut()}>
                Sign Out
              </button>
            </div>
          </div>
        </div>  
      </div>
    </div>)
}