import '../styles/globals.css'
import Layout from '../components/Layout/index'
import { Analytics } from '@vercel/analytics/next'

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
    <div className="flex h-[100svh] items-center justify-center">
      <p>Will be right back!!</p>
    </div>
  )
}

export default MyApp
