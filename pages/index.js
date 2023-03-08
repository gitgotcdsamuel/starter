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
        <Header title="hey, you are here!" />
        <p className="description">
          Get started by editing <vscode>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
