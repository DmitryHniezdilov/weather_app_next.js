import React from "react";
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import Loading from "../components/loading";
import '../styles/style.css'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Loading/>
      <Component {...pageProps} />
    </Provider>
  )
}