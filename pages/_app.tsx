import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={comfortaa.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
