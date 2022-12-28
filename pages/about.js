import Head from 'next/head'
import Layout from '../components/Layout.js'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
        <meta name="description" content="WebTech about us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title'>
        About Us
      </h1>
      <p>
        We are Nassim and Nolwen, two students from ECE Paris. This is a web application project for our Web Technologies course.
      </p>
    </Layout>
  )
}
