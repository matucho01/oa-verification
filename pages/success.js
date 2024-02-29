import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Success() {
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
            <h2>Vaccination HealthCert &rarr;</h2>
            <p>
              Vaccination HealthCert Verification <font color="green">Success</font>
            </p>
            <p>&nbsp;</p>
            <p>
              Back to <b><a href="/">Home</a></b>
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
