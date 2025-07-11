import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from '@/components/bootstrap/BootstrapClient';
import type { AppProps } from "next/app";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <BootstrapClient />
      <Footer />
    </>
  );
}
