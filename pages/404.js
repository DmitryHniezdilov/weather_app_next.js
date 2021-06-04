import Head from "next/head";
import PageLayout from "../components/pageLayout";
import React from "react";

export default function Error() {
    return (
      <>
        <Head>
          <title>Weather app error page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <PageLayout>
          <h1>
            This page does not exist...
          </h1>
        </PageLayout>
      </>
    )
};