import Link from "next/link";

export const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/info">
          <a>Info</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            left: 0;
            top: 0;
            right: 0;
            background: red;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          nav a {
            color: #fff;
            text-decoration: none;
          }
          main {
            margin-top: 60px;
          }
        `}
      </style>
    </>
  );
};
