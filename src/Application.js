import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks';
import { Helmet } from "react-helmet";

import { config } from './config'
import { client } from './Utils/apollo';
import GithubCallback from './Containers/GithubCallback';

import Blog from "./Containers/Blog"

const Application = () => {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get('code')) {
    return <GithubCallback />
  }

  return (
    <>
      <Helmet>
          <title>{config.title}</title>
          <meta charSet="utf-8" />
          <meta name="description" content={config.subtitle} />
      </Helmet>
      <ApolloProvider client={client}>
        <Blog />
      </ApolloProvider>
    </>
  )
};

export default Application;