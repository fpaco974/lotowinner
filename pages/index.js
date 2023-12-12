import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>loto-winner</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="lotowinner, la plateforme qui vous rapproche de la victoire, jeu euromillions, pmu, loto." />
        <meta name="google-site-verification" content="EJhORV8fw4C4ZZ3Kx-bUHRNDMJ7DgiHWe01eFxFe63w" />
      </Head>

      <main>
        <iframe
          src="https://gamma.app/embed/wi854kfuq7j7sw2"
          style={{ width: '100%', height: '100vh', border: 'none' }}
          allowFullScreen
        ></iframe>
      </main>
    </div>
  );
};

export default HomePage;
