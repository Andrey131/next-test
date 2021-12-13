import Head from "next/head";
import { MainLayout } from "../components/MainLayout";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <>
      <MainLayout>
        <Head>
          <title>Posts</title>
          <meta name="keywords" content="next,js,react"></meta>
        </Head>
      </MainLayout>
      <h1>POSTS</h1>
      <div className="masonryWithColumns">
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

Posts.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    posts,
  };
};

export default Posts;
