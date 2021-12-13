import { MainLayout } from "../../components/MainLayout";

const Post = ({ post }) => {
  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </MainLayout>
  );
};

Post.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();

  return {
    post,
  };
};

export default Post;
