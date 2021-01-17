import Head from 'next/head'
import Nav, { siteTitle } from '../components/nav'
import Footer from '../components/footer'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Nav />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="py-12 px-4">
        <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">
          <div className="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
            <h2 className="text-5xl leading-tight font-semibold font-heading text-white">Emily Chen</h2>
              <a href="https://twitter.com/emsesc" className="social" target="_blank">
                <img src="images/twitter-xxl.png"></img>
              </a>
              <a href="https://github.com/emsesc" className="social" target="_blank">
                <img src="images/github-9-xxl.png"></img>
              </a>
              <a href="https://www.linkedin.com/in/emilyschen/" className="social" target="_blank">
                <img src="images/linkedin-3-xxl.png"></img>
              </a><br/><br/><br/>
              <p className="mb-8 text-gray-400 leading-relaxed">High School student interested in Cybersecurity and Web Dev. Currently a <b>Developer Advocate</b> @ <a className="text-blue-300 hover:underline" href="https://www.bitproject.org/" target="_blank">BitProject</a>.</p>
              <p className="mb-8 text-gray-400 leading-relaxed"> Makes banana bread and explores the unknown in her free time. 🌎</p>
              <div>
                <a className="inline-block py-4 px-8 mr-6 leading-none text-white bg-blue-300 hover:bg-blue-400 font-semibold rounded shadow" href="#">Resume ⬇</a></div>
              </div>
              <div className="lg:w-1/2 px-2">
                <img src="images/circleprofile.png" alt=""></img>
              </div>
          </div>
      </section>

      <section class="py-12 px-4"><div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div class="flex flex-col h-full p-8 bg-gray-100 rounded">
            <h2 class="text-3xl font-semibold font-heading text-gray-800">Projects</h2>
            <p class="max-w-sm mt-auto mb-8 text-gray-400 leading-relaxed">Bunnimage, AYA Survivorship, Serverless Boot Camp, and FormSpawner</p>
            <a class="text-right text-blue-500 hover:underline" href="#">View all Projects</a>
          </div>
        </div>
        <div class="lg:w-1/2 px-4">
          <div class="flex flex-wrap -m-2">
            <div class="w-1/2 p-2"><img class="rounded shadow" src="images/Blue_and_Yellow_Technology_Blog_Banner_(1).png" alt=""></img></div>
            <div class="w-1/2 p-2"><img class="rounded shadow" src="images/Blue_and_Yellow_Technology_Blog_Banner_(3).png" alt=""></img></div>
            <div class="w-1/2 p-2"><img class="rounded shadow" src="images/Connecting.png" alt=""></img></div>
            <div class="w-1/2 p-2"><img class="rounded shadow" src="images/Blue_and_Yellow_Technology_Blog_Banner_(2).png" alt=""></img></div>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}