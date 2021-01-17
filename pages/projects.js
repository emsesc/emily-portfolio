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
        <section class="py-12 px-4 text-center"><div class="w-full max-w-2xl mx-auto">
          <h2 class="mt-2 mb-6 leading-tight font-semibold font-heading text-4xl text-white">Completed and Ongoing Projects</h2>
          <Link href="/">
            <a class="hover:underline text-blue-300" href="#">&lt;&lt; Go home</a>
          </Link>
        </div>
      </section>
    
      <section class="py-12 px-4">
        <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
          <div class="lg:w-1/2 px-2"><img src="images/Blue_and_Yellow_Technology_Blog_Banner_(1).png" alt="" class="rounded"></img></div>
          <div class="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0">
            <h2 class="text-5xl mb-6 leading-tight font-semibold font-heading text-white">Bunnimage</h2>
            <p class="text-gray-400 leading-relaxed">Bunnimage is a web-based file-sharing application that allows for easy upload of an image on one device and simple download in the form of a PDF on another.</p>
            <div class="mt-8"><a class="inline-block py-4 px-8 mr-6 leading-none text-white bg-blue-300 hover:bg-blue-400 font-semibold rounded shadow" href="#">Github</a><a class="text-blue-300 hover:underline" href="#">Blog</a></div>
          </div>
        </div>
      </section>
    
      <section class="py-12 px-4">
        <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
          <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
            <h2 class="text-5xl mb-6 leading-tight font-semibold font-heading text-white">Serverless Bootcamp</h2>
            <p class="mb-8 text-gray-400 leading-relaxed">A 3-week course on creating an Emotion Reader with Serverless Functions in partnership with Microsoft. Revamped the curriculum after participating in the Fall 2020 cohort.</p>
            <div><a class="inline-block py-4 px-8 mr-6 leading-none text-white bg-blue-300 hover:bg-blue-400 font-semibold rounded shadow" href="#">Github</a><a class="text-blue-300 hover:underline" href="#">Learn more</a></div>
          </div>
          <div class="lg:w-1/2 px-2"><img class="rounded" src="images/Blue_and_Yellow_Technology_Blog_Banner_(3).png" alt=""></img></div>
        </div>
      </section>
    
      <section class="py-12 px-4">
        <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
          <div class="lg:w-1/2 px-2"><img class="rounded" src="images/Blue_and_Yellow_Technology_Blog_Banner_(2).png" alt=""></img></div>
          <div class="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0">
            <h2 class="text-5xl mb-6 leading-tight font-semibold font-heading text-white">VeryGoodForms</h2>
            <p class="text-gray-400 leading-relaxed">A web application that allows users to create, edit, and fill out forms with Netlify and MongoDB Atlas. Built with the creation of a new BitProject BitCamp in mind.</p>
            <div class="mt-8"><a class="inline-block py-4 px-8 mr-6 leading-none text-white bg-blue-300 hover:bg-blue-400 font-semibold rounded shadow" href="#">Github</a><a class="text-blue-300 hover:underline" href="#">Learn more</a></div>
          </div>
        </div>
      </section>
    
      <section class="py-12 px-4">
        <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
          <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
            <h2 class="text-5xl mb-6 leading-tight font-semibold font-heading text-white">AYA Survivorship</h2>
            <p class="mb-8 text-gray-400 leading-relaxed">The goal of this project is to determine the resources that high school counselors and other professionals offer and what else they might need so that they can best serve AYA survivors.</p>
            <div><a class="inline-block py-4 px-8 mr-6 leading-none text-white bg-blue-300 hover:bg-blue-400 font-semibold rounded shadow" href="#">Github</a><a class="text-blue-300 hover:underline" href="#">Learn more</a></div>
          </div>
          <div class="lg:w-1/2 px-2"><img src="images/Connecting.png" alt="" class="rounded"></img></div>
        </div>
      </section>
        <Footer />
      </div>
    )
  }