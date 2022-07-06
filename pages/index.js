import Head from 'next/head';
// import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Steph - Front-End Developer</title>
        <meta name="description" content="This is Steph's Frontend Web Development portfolio. Click to contact her via forms, email, or LinkedIn." />
        <link rel="icon" href="/stephorc-logo.svg" />
      </Head>

      <Navbar />
    </div>
  )
}
