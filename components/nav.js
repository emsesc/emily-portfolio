import Head from 'next/head'
import Link from 'next/link'

const name = 'Emily Chen'
export const siteTitle = 'Emily Chen'

export default function Layout() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.io" />
        <meta
          name="description"
          content="Emily Chen's Portfolio"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <nav class="flex flex-wrap items-center justify-between p-4">
        <div class="flex flex-shrink-0">
          <Link href="/">
            <a class="text-xl font-semibold font-heading text-blue-200">Emily Chen</a>
          </Link>
        </div>
          <div class="block lg:hidden">
            <button class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
              <svg class="fill-current h-3 w-3" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button>
          </div>
          <div class="navbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
            <div class="ml-auto">
              <Link href="/blog">
                <a class="block lg:inline-block mt-4 lg:mt-0 lg:mr-8 hover:text-blue-400 text-blue-200">Blog</a>
              </Link>
              <Link href="/projects">
                <a class="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white font-semibold rounded shadow bg-blue-300 hover:bg-blue-400">Projects</a>
              </Link>
            </div>
          </div>
      </nav>
    </div>
  )
}