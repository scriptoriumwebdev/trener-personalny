import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Main from "../components/layout/Main";
import WhoAmI from "../components/about/WhoAmI";
import WhyMe from "../components/about/WhyMe";
import ContactForm from "../components/ContactForm";

export default function About() {
  return (
    <>
      <Head>
        <title>O mnie</title>
        <meta name="description" content="O mnie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <WhoAmI />
        <WhyMe />
        <ContactForm />
      </Main>
    </>
  );
}
