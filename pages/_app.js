import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
    <div className="flex h-[100svh] items-center justify-center bg-black font-geist text-white">
      <p className="text-sm">hello world.</p>
    </div>
  )
}

export default MyApp
