import App, { Container } from "next/app";
import Firebase, { FirebaseContext } from "../components/Firebase";
import Page from "../components/Page/Page";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <FirebaseContext.Provider value={new Firebase()}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </FirebaseContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
