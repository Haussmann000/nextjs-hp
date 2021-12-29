import Head from 'next/head'
import Image from 'next/image'
import Layout from '../component/Layout'

const Home = () => {
  return (
    <Layout title="Home">
      <p className="text-4xl animate-fadein">Welcome to Nextjs</p>
    </Layout>
  )
}

export default Home