import { useRouter } from "next/router";
import { useEffect } from "react";
import dynamic from "next/dynamic";

import useStore from "@/helpers/store";
import partition from "@/helpers/partition";
import Header from "@/config";

import Dom from "@/components/layout/dom";

import "@/styles/index.css";

const LCanvas = dynamic(() => import("@/components/layout/canvas"), {
  ssr: false,
});

const Balance = ({ child }) => {
  const [r3f, dom] = partition(child, (c) => c.props.r3f === true);

  return (
    <>
      <Dom>{dom}</Dom>
      <LCanvas>{r3f}</LCanvas>
    </>
  );
};

function App({ Component, pageProps = { title: "Gallery" } }) {
  const router = useRouter();

  useEffect(() => {
    useStore.setState({ router });
  }, [router]);

  const child = Component(pageProps).props.children;

  return (
    <>
      <Header title={pageProps.title} />
      {child && child.length > 1 ? (
        <>
          <Balance child={Component(pageProps).props.children} />
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default App;
