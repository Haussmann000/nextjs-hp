import Layout from '../component/Layout'
import Skills from '../component/Skills'
import Works from '../component/Works'
import Sorry from '../component/Sorry'

const Home = ({}) => {
  return (
    <Layout title="Home" className="animate-fadein">
      <Skills />
      <Works />
    </Layout>
  )

}

export default Home