import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Learning to build products people love.<br/> Quit my job to start my own company, while sharing content on SaaS, growth, product and everything in between.</p>
        <p>
          Have some thoughts? Share them with me at{' '}
          <a href="https://twitter.com/gabrielbarbarc">Twitter{' '}</a>or{' '}
          <a href='https://linkedin.com/in/gabrielbrcampos/'>LinkedIn</a>
        </p>
      </section>
    </Layout>
  )
}