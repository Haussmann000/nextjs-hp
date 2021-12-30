import AwsIcon from '../component/icons/FaAWS'
import TerraformIcon from '../component/icons/SiTerraform'
import Layout from '../component/Layout'
import TopContents from '../component/TopContents'

export async function getStaticProps() {
  const skills = [
        {
          id : 1,
          name : "AWS",
          desc : "2year",
          // icons : <AwsIcon />
        },
        {
          id : 2,
          name : "JavaScript",
          desc : "1year",
          icon : ""
        },
        {
          id : 3,
          name : "Terraform",
          // desc : <TerraformIcon />
        }
  ]

  const works = [
        {
          id : 1,
          name : "Portfolio",
          desc : "このページです"
        },
        {
          id : 2,
          name : "Weather",
          desc : "世界の天気を表示します"
        }
  ]

  return {
    props : { skills, works }
  }
}
const Home = ({ skills, works }) => {
  return (
    <Layout title="Home">
      <TopContents props={skills}>Skills</TopContents>
      <TopContents props={works}>Works</TopContents>
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