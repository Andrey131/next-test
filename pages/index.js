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
      <p>{process.env.EXAMPLE_ENV}</p>
    </MainLayout>
  );
}
