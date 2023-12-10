import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <iframe
          src="https://gamma.app/embed/wi854kfuq7j7sw2"
          style={{ width: '100%', height: '100vh', border: 'none' }}
          allowFullScreen
        ></iframe>
      </main>

      <Footer />
    </div>
  )
}
