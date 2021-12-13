import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Next-test</title>
      </Head>
      <p>
        <Link href="/info">
          <a>info</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>posts</a>
        </Link>
      </p>
      <p>
        <a> PRIVATE_API_KEY: {process.env.NEXT_PUBLIC_PRIVATE_API_KEY} </a>{" "}
        <br />
        <a> PROD_ENV: {process.env.NEXT_PUBLIC_PROD_ENV} </a>
        <br />
        <a> DEV_ENV: {process.env.NEXT_PUBLIC_DEV_ENV} </a>
        <br />
        <a> EXAMPLE_ENV: {process.env.NEXT_PUBLIC_EXAMPLE_ENV} </a>
        <br />
      </p>
    </MainLayout>
  );
}
