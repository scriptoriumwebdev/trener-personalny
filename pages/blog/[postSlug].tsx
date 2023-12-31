import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { apolloClient } from "../../graphql/apolloClient";
import Main from "../../components/layout/Main";
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

import { GetPostBySlugDocument, GetPostBySlugQuery, GetPostBySlugQueryVariables, GetPostsSlugsDocument, GetPostsSlugsQuery } from "../../generated/graphql";
import { useEffect } from "react";


export default function BlogPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  useEffect(() => {
    if (!data || !data.post) {
      router.push("/404");
    }
  }, []);

  if (!data || !data.post) {
    return null;
  } 

  const markdown = data.post.content.markdown

  return (
    <>
      <Head>
        <title>{data.post.title} - Warszawa Centrum  - Radek Trener</title>
        <meta name="description" content={data.post.excerpt || ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#b91c1c" />
      </Head>
      <Main>
        <div className="px-4 py-12 sm:px-6 md:py-16 lg:px-16 ">
          <nav aria-label="Breadcrumb" className="flex mb-16">
            <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="ms-1.5 text-xs font-medium">
                    Strona domowa
                  </span>
                </Link>
              </li>

              <li className="relative flex items-center">
                <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

                <Link
                  href="/blog"
                  className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
            </ol>
          </nav>

          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h1 className="mb-4 md:mb-8 text-4xl tracking-tight font-extrabold text-gray-900">
              {data.post.title}
            </h1>
            <Image
              height={1920}
              width={1080}
              alt={data.post.title}
              src={data.post.coverImage!.url}
              className="w-full object-cover pb-4 md:pb-8"
            />
            <article className="prose lg:prose-xl p-4 text-justify text-gray-900 dark:prose-invert">

            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} linkTarget="_blank" />
            </article>
            <button type="button" onClick={() => router.back()}>
              <span className="text-red-700 dark:text-red-200 mr-2">←</span>

              <span className="flex-1 text-gray-700 hover:text-gray-700/75">
                Zobacz więcej postów
              </span>
            </button>
          </div>
        </div>
      </Main>
    </>
  );
}

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetPostsSlugsQuery>({
    query: GetPostsSlugsDocument,
  });
  return {
    paths: data.posts.map((post) => {
      return {
        params: {
          postSlug: post.slug,
        },
      };
    }),
    fallback: "blocking",
  };
};

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ postSlug: string }>) => {
  if (!params?.postSlug) {
    return {
      props: {},
      notFound: true,
    };
  }
  const { data } = await apolloClient.query<GetPostBySlugQuery, GetPostBySlugQueryVariables>({
    variables: {
      slug: params.postSlug,
    },
    query: GetPostBySlugDocument,
  });

  return {
    props: {
      data,
    },
    revalidate: 60 * 15
  };
};

