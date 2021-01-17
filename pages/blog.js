import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section class="py-12 px-4"><div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
        <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
          <h2 class="text-5xl leading-tight font-semibold font-heading">Emily Chen</h2>
          <a href="https://twitter.com/emsesc" class="social" target="_blank">
            <img src="images/twitter-xxl.png"></img>
          </a>
          <a href="https://github.com/emsesc" class="social" target="_blank">
            <img src="images/github-9-xxl.png"></img>
          </a>
          <a href="https://www.linkedin.com/in/emilyschen/" class="social" target="_blank">
            <img src="images/linkedin-3-xxl.png"></img>
          </a><br/><br/><br/>
          <p class="mb-8 text-gray-400 leading-relaxed">High School student interested in Cybersecurity and Web Dev. Currently a <b>Developer Advocate</b> @ <a class="text-blue-300 hover:underline" href="https://www.bitproject.org/" target="_blank">BitProject</a>.</p>
          <p class="mb-8 text-gray-400 leading-relaxed"> Makes banana bread and explores the unknown in her free time. 🌎</p>
          <div><a class="inline-block py-4 px-8 mr-6 leading-none text-white bg-blue-300 hover:bg-blue-400 font-semibold rounded shadow" href="#">Resume ⬇</a></div>
        </div>
        <div class="lg:w-1/2 px-2"><img src="images/circleprofile.png" alt=""></img></div>
        </div>
      </section>
    </Layout>
  )
}