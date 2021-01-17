import Head from 'next/head'
import Nav, { siteTitle } from '../components/nav'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Home({ allPostsData }) {
    return (
      <div>
        <Nav />
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section class="py-12 px-4 text-center">
        <div class="w-full max-w-2xl mx-auto">
          <h2 class="text-5xl mb-6 leading-tight font-semibold font-heading text-white">Blogs</h2>
          <Link href="/">
            <a class="hover:underline text-blue-300" href="#">&lt;&lt; Go home</a>
          </Link>        
        </div>
      </section>
    
      <div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
      <img src="images/Blue_and_Yellow_Technology_Blog_Banner_(1).png" alt="" class="rounded shadow flex-col p-8"></img>
      </div>
        <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
      <img src="images/Blue_and_Yellow_Technology_Blog_Banner_(3).png" alt="" class="rounded shadow flex-col p-8"></img>
      </div>
      </div>
    
      <section class="py-12 px-4"><div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div class="flex flex-col h-full p-8 bg-gray-100 rounded">
            <h2 class="text-3xl font-semibold font-heading text-gray-800">Creating a File Sharing and Conversion Web App with Azure Functions</h2><br/>
            <p class="max-w-sm mt-auto mb-8 text-gray-400 leading-relaxed">Detailed step-by-step walkthrough of how to replicate Bunnimage.</p>
            <a class="text-right text-blue-500 hover:underline" href="#">Read now ➡</a>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div class="flex flex-col h-full p-8 bg-gray-100 rounded">
            <h2 class="text-3xl font-semibold font-heading text-gray-800">Student to Mentor</h2>
            <p class="max-w-sm mt-auto mb-8 text-gray-400 leading-relaxed">My experience from going from participating in the Fall 2020 Serverless BitCamp to mentoring the next iteration.</p>
            <a class="text-right text-blue-500 hover:underline" href="#">Read now ➡</a>
          </div>
        </div>
        </div>
      </section>
        <Footer />
      </div>
    )
  }