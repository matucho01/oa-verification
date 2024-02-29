import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Open Attestation Verification App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/bee.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Open Attestation Verification App</a>
        </h1>

        <p className={styles.description}>
          Technology demonstration based on Next.js and <a target="_blank" href="https://github.com/Open-Attestation">https://github.com/Open-Attestation</a>
          <code className={styles.code}></code>
        </p>

        <div className={styles.grid}>


          <div
            className={styles.card}
          >
            <h2>EPN Certification Verify &rarr;</h2>
            <p>
              Please upload your EPN Certification generated from <b><a target="_blank" href="https://brynta69.com/">https://www.brynta69.com/</a></b>
              <p>&nbsp;</p>
              <form method="post" action="/api/verification" enctype="multipart/form-data">
                <input name="cert" type="file" />
                <p>&nbsp;</p>
                <input type="submit" />
              </form>

            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Copyright	&copy; 2024 by MetaLogIQ
      </footer>
    </div>
  )
}
