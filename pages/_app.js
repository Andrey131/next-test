import "../styles/main.css";
import "../styles/masonryPosts.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
