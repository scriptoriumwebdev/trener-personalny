import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Main from "../components/layout/Main";
import WhoAmI from "../components/about/WhoAmI";
import WhyMe from "../components/about/WhyMe";
import ContactForm from "../components/ContactForm";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>O mnie - Warszawa Centrum - Radek Trener</title>
        <meta
          name="description"
          content="Jestem doświadczonym trenerem personalnym, gotowym pomóc Ci osiągnąć Twoje cele zdrowotne i fitnessowe. Zapraszam na moją stronę, gdzie odkryjesz, jakie metody treningowe stosuję, aby pomóc moim podopiecznym osiągnąć najlepsze wyniki. Moje indywidualne podejście i wsparcie będą Twoją kluczem do sukcesu. Niezależnie od Twojego poziomu zaawansowania czy celów, wspólnie dopracujemy plan, który pomoże Ci odnieść sukces i cieszyć się zdrowszym życiem. Dołącz do mnie w tej wyjątkowej przygodzie fitnessu i przekonaj się, jak trening może zmienić Twoje życie na lepsze."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#b91c1c" />
      </Head>
      <Main>
        <div className="mx-auto max-w-screen-xl pt-12 md:pt-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
            O mnie
          </h1>
        </div>
        <WhoAmI />
        <WhyMe />
        <ContactForm />
      </Main>
    </>
  );
}
