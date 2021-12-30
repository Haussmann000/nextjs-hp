import Layout from '../component/Layout'
import TopContents from '../component/TopContents'

export async function getStaticProps() {
  const post = 
    [
    {
      id : 1,
      title : "Skills",
      content :  [
        {
          id : 1,
          name : "AWS",
          desc : "2year"
        },
        {
          id : 2,
          name : "JavaScript",
          desc : "1year"
        }
      ]
    },
    {
      id : 2,
      title : "Works",
      content :  [
        {
          id : 1,
          name : "Portfolio",
          desc : "このページです"
        },
        {
          id : 2,
          name : "Weather",
          desc : "このページです"
        }
      ]
    }
    ]

  return {
    props : { post }
  }
}
const Home = ({ post }) => {
  return (
    <Layout title="Home">
      <TopContents props={post}></TopContents>
          {/* <div className="flex-col">
            <div>AWS</div>
            <div>2 year</div>
          </div>
            <div className="flex-col">
              <div>Terraform</div>
              <div>1 year</div>
          </div>
        </div>
        <div className="flex justify-center text-4xl bg-yellow-300 mt-36 p-5">
          <p>Works</p>
        </div>
        <div className="flex flex-row justify-around items-center text-2xl bg-gray-200 p-5">
          <div className="flex-col">
            <div>Portfolio</div>
            <p>このページです</p>
          </div>
          <div className="flex-col">
            <div>AWS</div>
            <div>2 year</div>
          </div> */}
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
      <div>dummy.</div>
    </Layout>
  )

}

export default Home