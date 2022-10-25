import '../styles/globals.css'
import Header from './Header.js'
import '../styles/header.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Header/>
        <Component {...pageProps} />
    </>

  )
}

export default MyApp
