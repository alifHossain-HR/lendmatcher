import '../styles/globals.css'
import Head from "next/head"
import ProgressBar from "@badrap/bar-of-progress"
import Router from 'next/router'
import { ChakraProvider } from "@chakra-ui/react"

 const progress = new ProgressBar({
   size: 2,
   color: "rgba(255,0,0,0.5)",
   className: "bar-of-progress",
   delay: 100,
 })


function MyApp({ Component, pageProps }) {


    Router.events.on("routeChangeStart", progress.start)
    Router.events.on("routeChangeComplete", progress.finish)
    Router.events.on("routeChangeError", progress.finish)
  return (
    <ChakraProvider>
              <Head></Head>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
