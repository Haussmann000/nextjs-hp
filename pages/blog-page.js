import Layout from "../component/Layout"
import Post from "../component/Post"
import { getAllPostData } from "../lib/posts"
import Sorry from "../component/Sorry";

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      {/* <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul> */}
      <Sorry />
    </Layout>
  );
};

export default Blog

export async function getStaticProps() {
  const posts = await getAllPostData();
  return {
    props: { posts },
  };
}