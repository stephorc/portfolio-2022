import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Steph - Front-End Developer</title>
        <meta name="description" content="This is Steph's Frontend Web Development portfolio. Click to contact her via forms, email, or LinkedIn." />
        <link rel="icon" href="/stephorc-logo.svg" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}