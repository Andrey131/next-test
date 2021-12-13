import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <h1>Error 404</h1>
      <p>
        Please
        <Link href={"/"}>
          <a>go back</a>
        </Link>
        to safety
      </p>
    </>
  );
};

export default ErrorPage;
