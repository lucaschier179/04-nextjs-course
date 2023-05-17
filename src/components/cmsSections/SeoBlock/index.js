import Head from "next/head";

export function SEOBlock(props) {
  //console.log('SEOBLock', props);
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
}